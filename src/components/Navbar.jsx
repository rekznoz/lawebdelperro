import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Acerca de</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}