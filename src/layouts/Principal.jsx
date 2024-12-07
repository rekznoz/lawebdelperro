import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import {Outlet} from "react-router-dom"
import Login from "../components/Login.jsx"

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