import {Link} from "react-router-dom";
// importar imagen
import inicio from '../assets/navbar/inicio.png';
import razas from '../assets/navbar/razas.png';
import nosotros from '../assets/navbar/nosotros.png';
import contacto from '../assets/navbar/contacto.png';
import login from '../assets/navbar/login.png';

export default function Navbar() {
    return (
        <div className='contenedorHeader'>
            <h1 className='titulo'>
                La Web del Perro!
            </h1>
            <nav className='navbar'>
                <ul>
                    <li className='enlacesnav'>
                        <Link to="/">
                            <img src={inicio} alt='Inicio' />
                        </Link>
                    </li>
                    <li className='enlacesnav'>
                        <Link to="/razas">
                            <img src={razas} alt='Razas' />
                        </Link>
                    </li>
                    <li className='enlacesnav'>
                        <Link to="/nosotros">
                            <img src={nosotros} alt='Nosotros' />
                        </Link>
                    </li>
                    <li className='enlacesnav'>
                        <Link to="/contacto">
                            <img src={contacto} alt='Contacto' />
                        </Link>
                    </li>
                    <li className='enlacesnav'>
                        <Link to="/login">
                            <img src={login} alt='Login' />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}