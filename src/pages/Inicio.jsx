import '../css/inicio.css'

// import {} from '../config/FirebaseDB.jsx'
import Carrusel from "../components/Carrusel.jsx";

export default function Inicio() {
    return (
        <>
            <div id='area1'>
                <Carrusel/>
            </div>
            <div id='area2'>
                <h1>oicini</h1>
                {/* Seccion de herramientas */}
            </div>
            <div id='area3'>
                <h1>Home</h1>
            </div>
        </>
    )
}