import {useState} from "react";

export default function Login() {

    const [registro, setRegistro] = useState(false);

    const ocultarLogin = () => {
        // Ocultar el modal de Login
        const modal = document.getElementById('loginForm');
        modal.style.display = 'none';
    }

    const mostrarRegistro = () => {
        if (registro) {
            // Ocultar el modal de Registro
            const modal = document.getElementById('registroForm');
            modal.style.display = 'none';
            // Mostrar el modal de Login
            const modalLogin = document.getElementById('loginForm');
            modalLogin.style.display = 'block';
            setRegistro(false);
        } else {
            // Mostrar el modal de Registro
            const modal = document.getElementById('registroForm');
            modal.style.display = 'block';
            // Ocultar el modal de Login
            const modalLogin = document.getElementById('loginForm');
            modalLogin.style.display = 'none';
            setRegistro(true);
        }
    }

    const loginUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.passw.value;
        console.log(email, password);
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
                        <input className="input-login" type="email" placeholder="Ingrese su Email" name="email"/>

                        <label className="label-login" htmlFor="psw">
                            <b>Contraseña</b>
                        </label>
                        <input className="input-login" type="password" placeholder="Ingrese su contraseña" name="psw"/>

                        <button id="login-boton" type="submit">Login</button>
                    </form>
                    <button className="botonRegistro" onClick={mostrarRegistro}>Registrarse</button>
                    <button className="botonCerrarLogin" onClick={ocultarLogin}>Cerrar</button>
                </div>
            </div>

            <div id="registroForm" className="login-form">
                <div className="login-content">
                    <form onSubmit={loginUser}>
                        <h2 className="titulo-login">Registar Usuario</h2>

                        <label className="label-login" htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input className="input-login" type="email" placeholder="Ingrese su Email" name="email"/>

                        <label className="label-login" htmlFor="psw">
                            <b>Contraseña</b>
                        </label>
                        <input className="input-login" type="password" placeholder="Ingrese su contraseña" name="psw"/>

                        <button className="botonRegistro" type="submit">Registrarse</button>
                    </form>
                    <button className="botonCerrarLogin" onClick={mostrarRegistro}>Cerrar</button>
                </div>
            </div>
        </>
    )
}