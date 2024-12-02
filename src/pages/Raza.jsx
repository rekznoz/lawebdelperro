import {Link, useLoaderData, useNavigate} from "react-router-dom";
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
                    <p>{raza["general"]["shortDescription"]}</p>
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

// registry.dog/api/v1

/*

{
    "status": "success",
    "data": [
{
    "general": {
    "name": "Chihuahua",
    "group": "Companion",
    "personalityTraits": [
    "Companionable",
    "Dignified",
    "Lively"
    ],
    "shortDescription": "The Chihuahua is a tiny, vivacious companion with a huge personality and captivating charm.",
    "longDescription": "The Chihuahua is a tiny dog with a huge personality, making it an ideal companion for those who appreciate a vivacious and captivating pet. Weighing around 5 pounds and standing at 7 inches tall, this elegant breed is renowned for its expressive, luminous eyes and characteristic 'apple' head. Chihuahuas are highly loyal and exude a big-dog attitude despite their small size, often displaying a protective instinct that belies their stature.\n They are adaptable and thrive in city environments, enjoying quality time on their owner's lap. Known for their smooth, straight coats in various colors and patterns, Chihuahuas require minimal grooming but do need training to prevent them from becoming overly dominant. While they are playful and affectionate with their families, their small size makes them unsuitable for rough play with children.\n Highly vocal and alert, Chihuahuas make excellent watchdogs, bringing both joy and companionship to any home. With a lifespan of up to 15 years, these dogs are a long-term commitment, offering endless love and amusement to those who embrace their spirited nature.",
    "popularity": 5,
    "height": 7,
    "weight": 5,
    "lifespan": 15
},
    "physical": {
    "size": 1,
    "lifespan": 4,
    "droolingFrequency": 1,
    "coatStyle": "Straight",
    "coatTexture": "Smooth",
    "coatLength": 2,
    "doubleCoat": false
},
    "behavior": {
    "familyAffection": 4,
    "childFriendly": 1,
    "dogSociability": 3,
    "friendlinessToStrangers": 2,
    "playfulness": 4,
    "protectiveInstincts": 4,
    "adaptability": 4,
    "barkingFrequency": 5
},
    "care": {
    "sheddingAmount": 2,
    "groomingFrequency": 1,
    "exerciseNeeds": 4,
    "mentalStimulationNeeds": 3,
    "trainingDifficulty": 3
},
    "images": {
    "small": {
    "indoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/small/indoors.jpg",
    "outdoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/small/outdoors.jpg",
    "studio": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/small/studio.jpg"
},
    "large": {
    "indoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/large/indoors.png",
    "outdoors": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/large/outdoors.png",
    "studio": "https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/chihuahua/large/studio.png"
}
},
    "id": "chihuahua"
},
}

*/