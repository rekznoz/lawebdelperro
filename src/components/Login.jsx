import {useContext, useEffect, useState} from "react"
import {firebaseLogin, firebaseRegistro, auth} from "../config/FirebaseAuth.jsx";
import {UsuarioC} from "../context/UsuarioC.jsx";

// Recoge los datos del formulario
import {Formik} from 'formik';
// https://formik.org/docs/overview

// Validar los datos del formulario con Yup
import {bool, object, string} from 'yup';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {AgregarUsuario, GetUserData} from "../config/FirebaseDB.jsx";
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
    nombre: '',
    apellidos: '',
    nacimiento: '',
    favoritos: []
}

export default function Login() {

    const [registro, setRegistro] = useState(false)
    const {usuario} = useContext(UsuarioC)

    const ocultarLogin = () => {
        // Ocultar el modal de Login
        const modal = document.getElementById('loginForm')
        modal.style.display = 'none'
    }

    const mostrarRegistro = () => {
        if (registro) {
            // Ocultar el modal de Registro
            const modal = document.getElementById('registroForm')
            modal.style.display = 'none'
            // Mostrar el modal de Login
            const modalLogin = document.getElementById('loginForm')
            modalLogin.style.display = 'block'
            setRegistro(false)
        } else {
            // Mostrar el modal de Registro
            const modal = document.getElementById('registroForm')
            modal.style.display = 'block'
            // Ocultar el modal de Login
            const modalLogin = document.getElementById('loginForm')
            modalLogin.style.display = 'none'
            setRegistro(true)
        }
    }

    const onSubmit = async (values, {resetForm}) => {
        if (registro) {
            await firebaseRegistro(values.email, values.password)
                .then(() => {
                    mostrarRegistro()
                    AgregarUsuario('usuarios', fireBaseDataBase, auth.currentUser.uid)
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
                    <div id="loginForm" className="login-form">
                        <div className="login-content">
                            <form onSubmit={handleSubmit}>
                                <h2 className="titulo-login">Iniciar Sesión</h2>

                                <label className="label-login" htmlFor="email">
                                    <b>Email</b>
                                </label>
                                <input className="input-login" type="email" placeholder="Ingrese su Email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                                {touched.email && errors.email ? <p className="FormError">{errors.email}</p> : null}

                                <label className="label-login" htmlFor="psw">
                                    <b>Contraseña</b>
                                </label>
                                <input className="input-login" type="password" placeholder="Ingrese su contraseña" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
                                {touched.password && errors.password ? <p className="FormError">{errors.password}</p> : null}

                                <label className="label-login" htmlFor="terminos">
                                    <input className="input-login" type="checkbox" name="terminos" checked={values.terminos} value={values.terminos} onBlur={handleBlur} onChange={handleChange}/>
                                    <span>Aceptar las politicas de <Link to="privacy" className="politicas">Privacidad</Link> y el <Link to="terms" className="politicas">Acuerdo de usuario</Link></span>
                                </label>
                                {touched.terminos && errors.terminos ? <p className="FormError">{errors.terminos}</p> : null}

                                <button id="login-boton" type="submit">Login</button>
                            </form>
                            <button className="botonRegistro" onClick={mostrarRegistro}>Registrarse</button>
                            <button className="botonCerrarLogin" onClick={ocultarLogin}>Cerrar</button>
                        </div>
                    </div>

                    <div id="registroForm" className="login-form">
                        <div className="login-content">
                            <form onSubmit={handleSubmit}>
                                <h2 className="titulo-login">Registar Usuario</h2>

                                <label className="label-login" htmlFor="email">
                                    <b>Email</b>
                                </label>
                                <input className="input-login" type="email" placeholder="Ingrese su Email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                                {touched.email && errors.email ? <p className="FormError">{errors.email}</p> : null}

                                <label className="label-login" htmlFor="psw">
                                    <b>Contraseña</b>
                                </label>
                                <input className="input-login" type="password" placeholder="Ingrese su contraseña" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
                                {touched.password && errors.password ? <p className="FormError">{errors.password}</p> : null}

                                <label className="label-login" htmlFor="terminos">
                                    <input className="input-login" type="checkbox" name="terminos" checked={values.terminos} value={values.terminos} onBlur={handleBlur} onChange={handleChange}/>
                                    <span>Aceptar las politicas de <Link to="privacy" className="politicas">Privacidad</Link> y el <Link to="terms" className="politicas">Acuerdo de usuario</Link></span>
                                </label>
                                {touched.terminos && errors.terminos ? <p className="FormError">{errors.terminos}</p> : null}

                                <button className="botonRegistro" type="submit">Registrarse</button>
                            </form>
                            <button className="botonCerrarLogin" onClick={mostrarRegistro}
                                    disabled={isSubmitting}>Regresar
                            </button>
                        </div>
                    </div>
                </>
            )}
        </Formik>
    )
}