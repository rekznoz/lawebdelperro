import {useLoaderData} from "react-router-dom";
import '../css/raza.css'
import Galeria from "../components/Galeria.jsx";

export default function Raza() {

    const {raza} = useLoaderData()

    if (!raza) {
        throw new Response('Error al obtener la raza', {status: 404})
    }

    const imagenes = [
        raza["images"]["large"]["indoors"],
        raza["images"]["large"]["outdoors"],
        raza["images"]["large"]["studio"]
    ]

    return (
        <>
            <div id='area1'>
                <div className="carta-texto-raza">
                    <h2>{raza["general"]["name"]}</h2>
                    <h3>{raza["general"]["shortDescription"]}</h3>
                    <p>{raza["general"]["longDescription"]}</p>
                </div>
            </div>
            <div id='area2'>

                <div className='estadisticas-raza'>
                    <div className="seccion-raza animacion-hover">
                        <h3>General</h3>
                        <p><span className="negrita-raza">Grupo:</span> {raza["general"]["group"]}</p>
                        <p><span
                            className="negrita-raza">Personalidad:</span> {raza["general"]["personalityTraits"].join(', ')}
                        </p>
                        <p><span className="negrita-raza">Popularidad:</span> {raza["general"]["popularity"]}
                        </p>
                        <p><span className="negrita-raza">Altura:</span> {raza["general"]["height"]}</p>
                        <p><span className="negrita-raza">Peso:</span> {raza["general"]["weight"]}</p>
                        <p><span
                            className="negrita-raza">Esperanza de vida:</span> {raza["general"]["lifespan"]}</p>
                    </div>

                    <div className="seccion-raza animacion-hover">
                        <h3>Físico</h3>
                        <p><span className="negrita-raza">Tamaño:</span> {raza["physical"]["size"]}</p>
                        <p><span
                            className="negrita-raza">Esperanza de vida:</span> {raza["physical"]["lifespan"]}
                        </p>
                        <p><span
                            className="negrita-raza">Frecuencia de babeo:</span> {raza["physical"]["droolingFrequency"]}
                        </p>
                        <p><span
                            className="negrita-raza">Estilo de pelaje:</span> {raza["physical"]["coatStyle"]}
                        </p>
                        <p><span
                            className="negrita-raza">Textura de pelaje:</span> {raza["physical"]["coatTexture"]}
                        </p>
                        <p><span
                            className="negrita-raza">Largo de pelaje:</span> {raza["physical"]["coatLength"]}
                        </p>
                        <p><span
                            className="negrita-raza">Doble capa:</span> {raza["physical"]["doubleCoat"] ? 'Sí' : 'No'}
                        </p>
                    </div>

                    <div className="seccion-raza animacion-hover">
                        <h3>Comportamiento</h3>
                        <p><span
                            className="negrita-raza">Afecto familiar:</span> {raza["behavior"]["familyAffection"]}
                        </p>
                        <p><span
                            className="negrita-raza">Amigable con los niños:</span> {raza["behavior"]["childFriendly"]}
                        </p>
                        <p><span
                            className="negrita-raza">Sociabilidad con otros perros:</span> {raza["behavior"]["dogSociability"]}
                        </p>
                        <p><span
                            className="negrita-raza">Amigable con extraños:</span> {raza["behavior"]["friendlinessToStrangers"]}
                        </p>
                        <p><span className="negrita-raza">Juguetón:</span> {raza["behavior"]["playfulness"]}</p>
                        <p><span
                            className="negrita-raza">Instintos protectores:</span> {raza["behavior"]["protectiveInstincts"]}
                        </p>
                        <p><span
                            className="negrita-raza">Adaptabilidad:</span> {raza["behavior"]["adaptability"]}
                        </p>
                        <p><span
                            className="negrita-raza">Frecuencia de ladrido:</span> {raza["behavior"]["barkingFrequency"]}
                        </p>
                    </div>

                    <div className="seccion-raza animacion-hover">
                        <h3>Cuidados</h3>
                        <p><span
                            className="negrita-raza">Cantidad de muda:</span> {raza["care"]["sheddingAmount"]}
                        </p>
                        <p><span
                            className="negrita-raza">Frecuencia de aseo:</span> {raza["care"]["groomingFrequency"]}
                        </p>
                        <p><span
                            className="negrita-raza">Necesidades de ejercicio:</span> {raza["care"]["exerciseNeeds"]}
                        </p>
                        <p><span
                            className="negrita-raza">Necesidades de estimulación mental:</span> {raza["care"]["mentalStimulationNeeds"]}
                        </p>
                        <p><span
                            className="negrita-raza">Dificultad de entrenamiento:</span> {raza["care"]["trainingDifficulty"]}
                        </p>
                    </div>
                </div>
            </div>
            <div id='area3'>
                <Galeria imagenes={imagenes}/>
            </div>
        </>
    )
}
