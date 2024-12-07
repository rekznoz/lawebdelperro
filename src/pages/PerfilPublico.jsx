import {useLoaderData} from "react-router-dom";

import '../css/perfil.css'
import {Loading} from "../components/Loading.jsx";

export default function PerfilPublico() {

    const datosUsuario = useLoaderData()

    console.log(datosUsuario)

    if (!datosUsuario) {
        return <Loading/>
    }

    return (
        <>
            <div id='area1'>
                <div className="cabecera-perfil">
                    {
                        datosUsuario.avatar ? (
                            <img src={datosUsuario.avatar} className="avatar" alt="Avatar"/>
                        ) : null
                    }
                    <h1>{datosUsuario.name}</h1>
                </div>
            </div>
            <div id='area2'>
                <div className="perfil-informacion">
                    <h2>Información de Perfil</h2>
                    <p>
                        <span>Nombre:</span> {
                        datosUsuario.name ? datosUsuario.name : ''
                    }
                    </p>
                    <p>
                        <span>Teléfono:</span> {
                        datosUsuario.telefono ? datosUsuario.telefono : ''
                    }
                    </p>
                    <p>
                        <span>Fecha de Nacimiento:</span> {
                        datosUsuario.fechaNacimiento ? datosUsuario.fechaNacimiento : ''
                    }
                    </p>
                    <p>
                        <span>Dirección:</span> {
                        datosUsuario.calle ? datosUsuario.calle : ''
                    }, {
                        datosUsuario.ciudad ? datosUsuario.ciudad : ''
                    }, {
                        datosUsuario.codigoPostal ? datosUsuario.codigoPostal : ''
                    }
                    </p>
                    <p>
                        <span>Redes Sociales:</span>
                    </p>
                    <p>
                        <span>Facebook:</span> {
                        datosUsuario.facebook ? datosUsuario.facebook : ''
                    }
                    </p>
                    <p>
                        <span>Twitter:</span> {
                        datosUsuario.twitter ? datosUsuario.twitter : ''
                    }
                    </p>
                    <p>
                        <span>Instagram:</span> {
                        datosUsuario.instagram ? datosUsuario.instagram : ''
                    }
                    </p>
                    <p>
                        <span>Biografía:</span> {
                        datosUsuario.bio ? datosUsuario.bio : ''
                    }
                    </p>
                </div>
            </div>
            <div id='area3'>
            </div>
        </>
    )
}