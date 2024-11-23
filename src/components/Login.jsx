export default function Login() {

    const ocultarLogin = () => {
        // Ocultar el modal de Login
        const modal = document.getElementById('loginForm');
        modal.style.display = 'none';
    }

    const loginUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.psw.value;
        console.log(email, password);
    }

    return (
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
                <button className="botonCerrarFiltro" onClick={ocultarLogin}>Cerrar</button>
            </div>
        </div>
    )
}