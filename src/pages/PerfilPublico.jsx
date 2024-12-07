import {useLoaderData} from "react-router-dom";

import '../css/perfil.css'
import {Loading} from "../components/Loading.jsx";
import Facebook from "../assets/perfil/facebook.png";
import Twitter from "../assets/perfil/twitter.png";
import Instagram from "../assets/perfil/instagram.png";

export default function PerfilPublico() {

    const datosUsuario = useLoaderData()

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
                        {
                            datosUsuario.facebook ? (
                                <a href={datosUsuario.facebook} target="_blank" rel="noreferrer">
                                    <img src={Facebook} alt="Facebook"/>
                                </a>
                            ) : ''
                        }
                    </p>
                    <p>
                        {
                            datosUsuario.twitter ? (
                                <a href={datosUsuario.twitter} target="_blank" rel="noreferrer">
                                    <img src={Twitter} alt="Twitter"/>
                                </a>
                            ) : ''
                        }
                    </p>
                    <p>
                        {
                            datosUsuario.instagram ? (
                                <a href={datosUsuario.instagram} target="_blank" rel="noreferrer">
                                    <img src={Instagram} alt="Instagram"/>
                                </a>
                            ) : ''
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