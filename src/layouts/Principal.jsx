import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Principal() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}