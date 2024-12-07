import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import {Outlet} from "react-router-dom"
import Login from "../components/Login.jsx"

/*
 * Componente que muestra el layout principal
 * @param {Object} atributos - Atributos del componente
 * @param {JSX.Element} atributos.children - Componentes hijos
 * @returns {JSX.Element} Componente
 */
export default function Principal({ children }) {
    return (
        <>
            <Header />
            <main className='main'>
                {children || <Outlet />}
            </main>
            <Footer />
            <Login />
        </>
    )
}