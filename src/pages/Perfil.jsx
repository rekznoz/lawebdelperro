import {useContext, useState} from "react";

import '../css/perfil.css'
import {Formik} from "formik";
import {object, string} from 'yup';
import Swal from "sweetalert2";
import {sincronizarUsuario} from "../config/FirebaseDB.jsx";
import {UsuarioC} from "../context/UsuarioC.jsx";
import {Loading} from "../components/Loading.jsx";

let forumarioDefecto = {
    avatar: '',
    name: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    calle: '',
    ciudad: '',
    codigoPostal: '',
    facebook: '',
    twitter: '',
    instagram: '',
    bio: ''
}

const validationSchema = object({
    avatar: string(),
    name: string()
        .required('El campo nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .max(50, 'El nombre debe tener como máximo 50 caracteres'),
    email: string()
        .required('El campo email es obligatorio')
        .email('El email no es válido'),
    telefono: string()
        .required('El campo teléfono es obligatorio')
        .min(8, 'El teléfono debe tener al menos 8 caracteres')
        .max(15, 'El teléfono debe tener como máximo 15 caracteres'),
    fechaNacimiento: string(),
    calle: string(),
    ciudad: string()
        .required('El campo ciudad es obligatorio'),
    codigoPostal: string()
        .required('El campo código postal es obligatorio'),
    facebook: string(),
    twitter: string(),
    instagram: string(),
    bio: string()
        .max(100, 'La biografía debe tener como máximo 100 caracteres')
})

export default function Perfil() {

    const {usuario, datosUsuario, setUsuario, cargando} = useContext(UsuarioC);
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState(datosUsuario);

    if (cargando) {
        return <Loading/>
    }


    const modoEdicion = () => {
        setIsEditing(!isEditing);
        forumarioDefecto = datosUsuario;
    }

    const handleSave = (values, funciones) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Vas a guardar los cambios en tu perfil.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, guardar cambios",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {

                const {avatar, name, email, telefono, fechaNacimiento, calle, ciudad, codigoPostal, facebook, twitter, instagram, bio} = values;
                const {resetForm} = funciones;

                sincronizarUsuario(usuario, {
                    avatar,
                    name,
                    email,
                    telefono,
                    fechaNacimiento,
                    calle,
                    ciudad,
                    codigoPostal,
                    facebook,
                    twitter,
                    instagram,
                    bio
                })

                setIsEditing(false);

                setUserInfo({
                    avatar,
                    name,
                    email,
                    telefono,
                    fechaNacimiento,
                    calle,
                    ciudad,
                    codigoPostal,
                    facebook,
                    twitter,
                    instagram,
                    bio
                });

                Swal.fire({
                    title: "Cambios guardados",
                    text: "Los cambios en tu perfil han sido guardados correctamente.",
                    icon: "success"
                });

                resetForm();
            }
        });
    };

    return (
        <>
            <div id='area1'>
                <div className="profile-header">
                    <img
                        className="avatar"
                        src={userInfo.avatar}
                        alt="User Avatar"
                    />
                    <h1>{userInfo.name}</h1>
                    <p>{userInfo.email}</p>
                    <button onClick={modoEdicion} className="edit-btn">
                        {isEditing ? 'Cancelar' : 'Editar'}
                    </button>
                </div>
            </div>
            <div id='area2'>
                {isEditing ? (
                    <Formik initialValues={forumarioDefecto} validationSchema={validationSchema} onSubmit={handleSave}>
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                            <div className="edit-form">
                                <h2>Editar Perfil</h2>
                                <div className="form-group">
                                    <label htmlFor="avatar">Avatar</label>
                                    <input
                                        type="text"
                                        id="avatar"
                                        name="avatar"
                                        value={values.avatar}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.avatar && touched.avatar && <div className="FormError">{errors.avatar}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name && <div className="FormError">{errors.name}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && <div className="FormError">{errors.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        value={values.telefono}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.telefono && touched.telefono &&
                                        <div className="FormError">{errors.telefono}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        id="fechaNacimiento"
                                        name="fechaNacimiento"
                                        value={values.fechaNacimiento}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.fechaNacimiento && touched.fechaNacimiento && (
                                        <div className="FormError">{errors.fechaNacimiento}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="calle">Calle</label>
                                    <input
                                        type="text"
                                        id="calle"
                                        name="calle"
                                        value={values.calle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.calle && touched.calle && <div className="FormError">{errors.calle}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ciudad">Ciudad</label>
                                    <input
                                        type="text"
                                        id="ciudad"
                                        name="ciudad"
                                        value={values.ciudad}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.ciudad && touched.ciudad &&
                                        <div className="FormError">{errors.ciudad}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="codigoPostal">Código Postal</label>
                                    <input
                                        type="text"
                                        id="codigoPostal"
                                        name="codigoPostal"
                                        value={values.codigoPostal}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.codigoPostal && touched.codigoPostal && (
                                        <div className="FormError">{errors.codigoPostal}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="facebook">Facebook</label>
                                    <input
                                        type="text"
                                        id="facebook"
                                        name="facebook"
                                        value={values.facebook}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.facebook && touched.facebook &&
                                        <div className="FormError">{errors.facebook}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="twitter">Twitter</label>
                                    <input
                                        type="text"
                                        id="twitter"
                                        name="twitter"
                                        value={values.twitter}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.twitter && touched.twitter &&
                                        <div className="FormError">{errors.twitter}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="instagram">Instagram</label>
                                    <input
                                        type="text"
                                        id="instagram"
                                        name="instagram"
                                        value={values.instagram}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.instagram && touched.instagram &&
                                        <div className="FormError">{errors.instagram}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bio">Biografía</label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        value={values.bio}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.bio && touched.bio && <div className="FormError">{errors.bio}</div>}
                                </div>
                                <button onClick={handleSubmit} type="submit" disabled={isSubmitting}
                                        className="save-btn">
                                    Guardar
                                </button>
                            </div>
                        )}
                    </Formik>
                ) : (
                    <div className="perfil-informacion">
                        <h2>Información de Perfil</h2>
                        <p>
                            <span>Nombre:</span> {userInfo.name}
                        </p>
                        <p>
                            <span>Email:</span> {userInfo.email}
                        </p>
                        <p>
                            <span>Teléfono:</span> {userInfo.telefono}
                        </p>
                        <p>
                            <span>Fecha de Nacimiento:</span> {userInfo.fechaNacimiento}
                        </p>
                        <p>
                            <span>Dirección:</span> {userInfo.calle}, {userInfo.ciudad}, {userInfo.codigoPostal}
                        </p>
                        <p>
                            <span>Redes Sociales:</span>
                        </p>
                        <p>
                            <span>Facebook:</span> {userInfo.facebook}
                        </p>
                        <p>
                            <span>Twitter:</span> {userInfo.twitter}
                        </p>
                        <p>
                            <span>Instagram:</span> {userInfo.instagram}
                        </p>
                        <p>
                            <span>Biografía:</span> {userInfo.bio}
                        </p>
                    </div>
                )}
            </div>
            <div id='area3'>
            </div>
        </>
    )
}