import {useContext, useState} from "react";

import '../css/perfil.css'
import {Formik} from "formik";
import {object, string} from 'yup';
import Swal from "sweetalert2";
import {sincronizarUsuario} from "../config/FirebaseDB.jsx";
import {UsuarioC} from "../context/UsuarioC.jsx";
import {Loading} from "../components/Loading.jsx";
import {Link} from "react-router-dom";

import Facebook from '../assets/perfil/facebook.png'
import Instagram from '../assets/perfil/instagram.png'
import Twitter from '../assets/perfil/twitter.png'

let forumarioDefecto = {
    avatar: '',
    name: '',
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
    avatar: string()
        .url('La URL no es válida')
        .max(255, 'La URL debe tener como máximo 255 caracteres'),
    name: string()
        .trim()
        .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
        .required('El campo nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .max(50, 'El nombre debe tener como máximo 50 caracteres'),
    telefono: string()
        .trim()
        .matches(/^[0-9]*$/, 'El teléfono solo puede contener números')
        .required('El campo teléfono es obligatorio')
        .min(8, 'El teléfono debe tener al menos 8 caracteres')
        .max(15, 'El teléfono debe tener como máximo 15 caracteres'),
    fechaNacimiento: string(),
    calle: string(),
    ciudad: string()
        .trim()
        .matches(/^[a-zA-Z\s]*$/, 'La ciudad solo puede contener letras')
        .required('El campo ciudad es obligatorio'),
    codigoPostal: string()
        .trim()
        .matches(/^[0-9]*$/, 'El código postal solo puede contener números')
        .required('El campo código postal es obligatorio'),
    facebook: string()
        .url('La URL no es válida')
        .max(255, 'La URL debe tener como máximo 255 caracteres'),
    twitter: string()
        .url('La URL no es válida')
        .max(255, 'La URL debe tener como máximo 255 caracteres'),
    instagram: string()
        .url('La URL no es válida')
        .max(255, 'La URL debe tener como máximo 255 caracteres'),
    bio: string()
        .max(100, 'La biografía debe tener como máximo 100 caracteres')
})

export default function Perfil() {

    const {usuario, _, datosUsuario, setDatosUsuario, cargando} = useContext(UsuarioC);
    const [isEditing, setIsEditing] = useState(false);

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

                const {resetForm} = funciones;

                setDatosUsuario(values);

                sincronizarUsuario(usuario.uid, values)

                setIsEditing(false);

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
                <div className="cabecera-perfil">
                    {
                        datosUsuario.avatar ? (
                            <img src={datosUsuario.avatar} className="avatar" alt="Avatar"/>
                        ) : null
                    }
                    <h1>{datosUsuario.name}</h1>
                    <h2><Link to={`/perfil/${usuario.uid}`} className="boton-ver-perfil">
                        Ver Perfil Público
                    </Link></h2>
                    <p>{usuario.email}</p>
                    <button onClick={modoEdicion} className="boton-editar">
                        {isEditing ? 'Cancelar' : 'Editar'}
                    </button>
                </div>
            </div>
            <div id='area2'>
                {isEditing ? (
                    <Formik initialValues={forumarioDefecto} validationSchema={validationSchema} onSubmit={handleSave}>
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                            <div className="editar-formulario">
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
                                    {errors.avatar && touched.avatar &&
                                        <div className="FormError">{errors.avatar}</div>}
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
                                        value={usuario.email}
                                        disabled={true}
                                    />
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
                                <div className="cont-grupo-formulario">
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
                                <div className="form-boton">
                                    <button onClick={handleSubmit} type="submit" disabled={isSubmitting}
                                            className="boton-guardar">
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        )}
                    </Formik>
                ) : (
                    <div className="perfil-informacion">
                        <h2>Información de Perfil</h2>
                        <p>
                            <span>Nombre:</span> {
                            datosUsuario.name ? datosUsuario.name : ''
                        }
                        </p>
                        <p>
                            <span>Email:</span> {
                            usuario.email ? usuario.email : ''
                        }
                        </p>
                        <p>
                            <span>Teléfono:</span> {
                            datosUsuario.telefono ? datosUsuario.telefono : ''
                        }
                        </p>
                        <p>
                            <span>Fecha de Nacimiento:</span> {
                            datosUsuario.fechaNacimiento ? datosUsuario.fechaNacimiento : ''
                        }
                        </p>
                        <p>
                            <span>Dirección:</span> {
                            datosUsuario.calle ? datosUsuario.calle : ''
                        }, {
                            datosUsuario.ciudad ? datosUsuario.ciudad : ''
                        }, {
                            datosUsuario.codigoPostal ? datosUsuario.codigoPostal : ''
                        }
                        </p>
                        <p>
                            <span>Redes Sociales:</span>
                        </p>
                        <p>
                            {
                                datosUsuario.facebook ? (
                                    <a href={datosUsuario.facebook} target="_blank" rel="noreferrer">
                                        <img src={Facebook} alt="Facebook"/>
                                    </a>
                                ) : ''
                            }
                        </p>
                        <p>
                            {
                                datosUsuario.twitter ? (
                                    <a href={datosUsuario.twitter} target="_blank" rel="noreferrer">
                                        <img src={Twitter} alt="Twitter"/>
                                    </a>
                                ) : ''
                            }
                        </p>
                        <p>
                            {
                                datosUsuario.instagram ? (
                                    <a href={datosUsuario.instagram} target="_blank" rel="noreferrer">
                                        <img src={Instagram} alt="Instagram"/>
                                    </a>
                                ) : ''
                            }
                        </p>
                        <p>
                            <span>Biografía:</span> {
                            datosUsuario.bio ? datosUsuario.bio : ''
                        }
                        </p>
                    </div>
                )}
            </div>
            <div id='area3'>
            </div>
        </>
    )
}