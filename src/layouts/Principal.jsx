import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Principal() {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}