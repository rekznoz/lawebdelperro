import {Link, useLoaderData} from "react-router-dom";

import '../css/perfil.css'
import {Loading} from "../components/Loading.jsx";
import Facebook from "../assets/perfil/facebook.png";
import Twitter from "../assets/perfil/twitter.png";
import Instagram from "../assets/perfil/instagram.png";

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
                        <span>Biografía:</span> {
                        datosUsuario.bio ? datosUsuario.bio : ''
                    }
                    </p>
                    <h2>Redes Sociales</h2>
                    <div className="redesSociales">

                        {
                            datosUsuario.facebook ? (
                                <p>
                                    <a href={datosUsuario.facebook} target="_blank" rel="noreferrer">
                                        <img src={Facebook} alt="Facebook"/>
                                    </a>
                                </p>
                            ) : ''
                        }

                        {
                            datosUsuario.twitter ? (
                                <p>
                                    <a href={datosUsuario.twitter} target="_blank" rel="noreferrer">
                                        <img src={Twitter} alt="Twitter"/>
                                    </a>
                                </p>
                            ) : ''
                        }

                        {
                            datosUsuario.instagram ? (
                                <p>
                                    <a href={datosUsuario.instagram} target="_blank" rel="noreferrer">
                                        <img src={Instagram} alt="Instagram"/>
                                    </a>
                                </p>
                            ) : ''
                        }
                    </div>
                    <div className="contenedor-favoritos">
                        <Link className="boton-favoritos-perfil" to={`/favoritos/${datosUsuario.uid}`}>Ver favoritos
                            de {
                                datosUsuario.name ? datosUsuario.name : "Usuario"}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}