import {useContext, useState} from "react"
import {firebaseLogin, firebaseRegistro} from "../config/FirebaseAuth.jsx";
import {UsuarioC} from "../context/UsuarioC.jsx";

const usuarioVacio = {
    email: '',
    password: ''
}

export default function Login() {

    const [registro, setRegistro] = useState(false)
    const [formUsuario, setFormUsuario] = useState(usuarioVacio)
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

    const handleChange = (e) => {
        setFormUsuario({
            ...formUsuario,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = async (e) => {
        e.preventDefault()
        await firebaseLogin(formUsuario.email, formUsuario.password)
            .then(() => {
                ocultarLogin()
            })
            .catch(error => {
                alert(error.message)
            })
        console.log('login')
        setFormUsuario(usuarioVacio)
    }

    const registerUser = async (e) => {
        e.preventDefault()
        await firebaseRegistro(formUsuario.email, formUsuario.password)
            .then(() => {
                mostrarRegistro()
            })
            .catch(error => {
                alert(error.message)
            })
        console.log('registro')
        setFormUsuario(usuarioVacio)
    }

    if (usuario) {
        return (<></>)
    }

    return (
        <>
            <div id="loginForm" className="login-form">
                <div className="login-content">
                    <form onSubmit={loginUser}>
                        <h2 className="titulo-login">Iniciar Sesión</h2>

                        <label className="label-login" htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input className="input-login" type="email" placeholder="Ingrese su Email" name="email" value={formUsuario.email} onChange={handleChange}/>

                        <label className="label-login" htmlFor="psw">
                            <b>Contraseña</b>
                        </label>
                        <input className="input-login" type="password" placeholder="Ingrese su contraseña" name="password" value={formUsuario.password} onChange={handleChange}/>

                        <button id="login-boton" type="submit">Login</button>
                    </form>
                    <button className="botonRegistro" onClick={mostrarRegistro}>Registrarse</button>
                    <button className="botonCerrarLogin" onClick={ocultarLogin}>Cerrar</button>
                </div>
            </div>

            <div id="registroForm" className="login-form">
                <div className="login-content">
                    <form onSubmit={registerUser}>
                        <h2 className="titulo-login">Registar Usuario</h2>

                        <label className="label-login" htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input className="input-login" type="email" placeholder="Ingrese su Email" name="email" value={formUsuario.email} onChange={handleChange}/>

                        <label className="label-login" htmlFor="psw">
                            <b>Contraseña</b>
                        </label>
                        <input className="input-login" type="password" placeholder="Ingrese su contraseña" name="password" value={formUsuario.password} onChange={handleChange}/>

                        <button className="botonRegistro" type="submit">Registrarse</button>
                    </form>
                    <button className="botonCerrarLogin" onClick={mostrarRegistro}>Cerrar</button>
                </div>
            </div>
        </>
    )
}