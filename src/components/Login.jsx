import {useContext, useState} from "react"
import {firebaseLogin, firebaseRegistro, auth} from "../config/FirebaseAuth.jsx";
import {UsuarioC} from "../context/UsuarioC.jsx";

// Recoge los datos del formulario
import {Formik} from 'formik';
// https://formik.org/docs/overview

// Validar los datos del formulario con Yup
import {bool, object, string} from 'yup';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {AgregarUsuario} from "../config/FirebaseDB.jsx";
// https://www.npmjs.com/package/yup

const validationSchema = object({
    email: string()
        .required('El campo email es obligatorio')
        .email('El email no es válido'),
    password: string()
        .required('El campo contraseña es obligatorio')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(20, 'La contraseña debe tener como máximo 20 caracteres'),
    terminos: bool()
        .oneOf([true], 'Debes aceptar los términos y condiciones')
})

const usuarioVacio = {
    email: '',
    password: '',
    terminos: false
}

const fireBaseDataBase = {
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

export default function Login() {

    const [registro, setRegistro] = useState(false)
    const {usuario} = useContext(UsuarioC)

    const ocultarLogin = () => {
        // Ocultar el modal de Login
        const modal = document.getElementById('modal-login-registro')
        modal.style.display = 'none'
    }

    const mostrarRegistro = () => {
        if (registro) {
            setRegistro(false)
        } else {
            setRegistro(true)
        }
    }

    const onSubmit = async (values, {resetForm}) => {
        if (registro) {
            await firebaseRegistro(values.email, values.password)
                .then(() => {
                    mostrarRegistro()
                    //AgregarUsuario('usuarios', fireBaseDataBase, auth.currentUser.uid)
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Error',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                })
        } else {
            await firebaseLogin(values.email, values.password)
                .then(() => {
                    ocultarLogin()
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Error',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                })
        }
        resetForm()
    }

    if (usuario) {
        return (<></>)
    }

    return (
        <Formik initialValues={usuarioVacio} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <>
                    <div id="modal-login-registro" className="modal-login-registro">
                        <div className="contenedor-login">
                            <form onSubmit={handleSubmit}>
                                <h2>{
                                    registro ? 'Registro' : 'Login'
                                }</h2>

                                <div className="contenedor-entrada">
                                    <input type="email" placeholder="Ingrese su Email"
                                           name="email"
                                           value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                                    {touched.email && errors.email ? <p className="FormError">{errors.email}</p> : null}
                                </div>


                                <div className="contenedor-entrada">
                                    <input type="password" placeholder="Ingrese su contraseña"
                                           name="password" value={values.password} onBlur={handleBlur}
                                           onChange={handleChange}/>
                                    {touched.password && errors.password ?
                                        <p className="FormError">{errors.password}</p> : null}
                                </div>


                                <div className="politicas-login">
                                    <input className="input-login" type="checkbox" name="terminos"
                                           checked={values.terminos} value={values.terminos} onBlur={handleBlur}
                                           onChange={handleChange}/>
                                    <span>Aceptar las politicas de <Link to="privacy"
                                                                         className="enlace-politicas">Privacidad</Link> y el <Link
                                        to="terms" className="enlace-politicas">Acuerdo de usuario</Link></span>
                                    {touched.terminos && errors.terminos ?
                                        <p className="FormError">{errors.terminos}</p> : null}
                                </div>

                                <div className="contenedor-login-botones">
                                    {
                                        !registro &&
                                        <>
                                            <button className="botonLogin" type="submit" disabled={isSubmitting}>Login</button>
                                            <button className="botonRegistro" onClick={mostrarRegistro}>Registro</button>
                                            <button className="botonCerrarLogin" onClick={ocultarLogin}>Cerrar</button>
                                        </>
                                    }
                                    {
                                        registro &&
                                        <>
                                            <button className="botonRegistro" type="submit"
                                                    disabled={isSubmitting}>Registrarse
                                            </button>
                                            <button className="botonCerrarLogin" onClick={mostrarRegistro}
                                                    disabled={isSubmitting}>Regresar
                                            </button>
                                        </>

                                    }
                                </div>
                            </form>

                        </div>
                    </div>
                </>
            )}
        </Formik>
    )
}