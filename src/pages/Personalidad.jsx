import {useState} from "react"
import {useRazaContext} from "../context/RazasC.jsx"
import {Loading} from "../components/Loading.jsx"
import "../css/personalidad.css"
import {Link} from "react-router-dom"

/**
 * Componente de Personalidad
 * @returns {JSX.Element}
 * @constructor
 */
export default function Personalidad() {

    const {razas, loading, error} = useRazaContext()
    const [answers, setAnswers] = useState({})
    const [result, setResult] = useState(null)

    if (loading) {
        return <Loading/>
    }

    if (error) {
        throw new Response('Error al obtener las razas', {status: 404})
    }

    const handleAnswerChange = (question, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: answer,
        }))
    }

    const calculateResult = () => {

        // Mapeo de preguntas a características de la API
        const characteristicsMap = {
            q1: {
                A: "playfulness", // Asociado a la pregunta 1
                B: "adaptability",
                C: "protectiveInstincts",
                D: "exerciseNeeds",
            },
            q2: {
                A: "adaptability", // Ambiente
                B: "calmness",
                C: "familyAffection",
                D: "exerciseNeeds",
            },
            q3: {
                A: "dogSociability", // Sociabilidad
                B: "friendlinessToStrangers",
                C: "protectiveInstincts",
                D: "dogSociability",
            },
            q4: {
                A: "barkingFrequency", // Nivel de ladrido
                B: "calmness",
                C: "protectiveInstincts",
                D: "dogSociability",
            },
            q5: {
                A: "exerciseNeeds", // Necesidades de ejercicio
                B: "mentalStimulationNeeds",
                C: "playfulness",
                D: "familyAffection",
            },
            q6: {
                A: "friendlinessToStrangers", // Amistoso con extraños
                B: "protectiveInstincts",
                C: "adaptability",
                D: "dogSociability",
            },
            q7: {
                A: "adaptability", // Se adapta fácilmente
                B: "exerciseNeeds",
                C: "mentalStimulationNeeds",
                D: "barkingFrequency",
            },
            q8: {
                A: "exerciseNeeds", // Nivel de energía
                B: "familyAffection",
                C: "dogSociability",
                D: "playfulness",
            },
            q9: {
                A: "playfulness", // Gusto por jugar
                B: "barkingFrequency",
                C: "exerciseNeeds",
                D: "mentalStimulationNeeds",
            },
            q10: {
                A: "dogSociability", // Sociabilidad
                B: "friendlinessToStrangers",
                C: "protectiveInstincts",
                D: "adaptability",
            },
        }

        // Crear un puntaje para cada raza
        const scores = {}

        razas.forEach((breed) => {
            let score = 0

            // Comparar respuestas con características de la raza
            for (const question in answers) {
                const userAnswer = answers[question]
                const trait = characteristicsMap[question][userAnswer]

                if (breed.behavior[trait] >= 3) {
                    // Más puntos si la raza destaca en esta característica
                    score += breed.behavior[trait]
                }
            }

            scores[breed.general.name] = score
        })

        // Encontrar la raza con el puntaje más alto
        const bestMatch = Object.keys(scores).reduce((a, b) =>
            scores[a] > scores[b] ? a : b
        )

        // Encontrar información de la raza seleccionada
        const bestBreed = razas.find(
            (breed) => breed.general.name === bestMatch
        )

        setResult(bestBreed)
    }

    return (
        <>
            <div id="area1">
                <h1 className="test-titulo">
                    Test de Personalidad
                    <p className="test-titulo">¿Qué Raza de Perro Eres?</p>
                </h1>

            </div>
            <div id="area2">
                <div className="contenedor-test">
                    <div className="pregunta">
                        <p className="texto-pregunta">1. ¿Cómo describirías tu personalidad general?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q1"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q1", "A")}
                            />
                            Enérgico y lleno de vida.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q1"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q1", "B")}
                            />
                            Tranquilo y relajado.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q1"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q1", "C")}
                            />
                            Protector y leal.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q1"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q1", "D")}
                            />
                            Aventurero y curioso.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">2. ¿Qué tipo de ambiente prefieres?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q2"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q2", "A")}
                            />
                            Una ciudad dinámica y emocionante.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q2"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q2", "B")}
                            />
                            Un lugar tranquilo en el campo.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q2"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q2", "C")}
                            />
                            Un hogar acogedor con mi familia.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q2"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q2", "D")}
                            />
                            Un lugar donde pueda estar al aire libre la mayor parte del tiempo.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">3. ¿Qué tan sociable eres con los demás?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q3"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q3", "A")}
                            />
                            Prefiero estar con unos pocos amigos cercanos.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q3"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q3", "B")}
                            />
                            Amo conocer gente nueva y socializar.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q3"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q3", "C")}
                            />
                            Soy reservado al principio, pero cálido cuando confío.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q3"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q3", "D")}
                            />
                            Me llevo bien con casi todos.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">4. ¿Cómo prefieres pasar el tiempo libre?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q4"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q4", "A")}
                            />
                            Hablando con mis amigos o familiares.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q4"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q4", "B")}
                            />
                            Relajándome en casa.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q4"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q4", "C")}
                            />
                            Jugando activamente con otros.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q4"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q4", "D")}
                            />
                            Explorando nuevos lugares o actividades.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">5. ¿Qué nivel de ladridos prefieres en un perro?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q5"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q5", "A")}
                            />
                            Me gusta que ladren mucho, es una señal de alerta.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q5"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q5", "B")}
                            />
                            Prefiero que no ladren mucho, sólo cuando sea necesario.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q5"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q5", "C")}
                            />
                            No me importa, depende de la situación.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q5"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q5", "D")}
                            />
                            Prefiero que sean muy callados y tranquilos.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">6. ¿Te sientes cómodo con desconocidos?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q6"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q6", "A")}
                            />
                            Sí, me encanta hacer nuevos amigos.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q6"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q6", "B")}
                            />
                            No, prefiero mantenerme con los que conozco.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q6"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q6", "C")}
                            />
                            Soy amigable, pero necesito un tiempo para confiar.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q6"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q6", "D")}
                            />
                            No me siento cómodo con los extraños.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">7. ¿Qué tan energético te consideras?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q7"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q7", "A")}
                            />
                            Muy energético, siempre en movimiento.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q7"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q7", "B")}
                            />
                            Tengo suficiente energía, pero también disfruto descansar.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q7"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q7", "C")}
                            />
                            Prefiero actividades tranquilas y relajadas.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q7"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q7", "D")}
                            />
                            Prefiero estar acostado la mayor parte del tiempo.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">8. ¿Qué tanto disfrutas jugar con tu perro?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q8"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q8", "A")}
                            />
                            Me encanta jugar mucho, ¡cuanto más mejor!
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q8"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q8", "B")}
                            />
                            Disfruto jugar, pero a veces prefiero descansar.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q8"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q8", "C")}
                            />
                            Me gusta jugar, pero no siempre es necesario.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q8"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q8", "D")}
                            />
                            No soy muy aficionado a jugar.
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">9. ¿Cómo prefieres que tu perro se relacione con otros perros?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q9"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q9", "A")}
                            />
                            Muy sociable, le gusta hacer amigos.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q9"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q9", "B")}
                            />
                            Prefiero que se lleve bien solo con algunos
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q9"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q9", "C")}
                            />
                            No me importa si es amigable con los perros.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q9"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q9", "D")}
                            />
                            Prefiero que no tenga contacto con otros per
                        </label>
                    </div>

                    <div className="pregunta">
                        <p className="texto-pregunta">10. ¿Te gustaría un perro que sea muy protector?</p>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q10"
                                value="A"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q10", "A")}
                            />
                            Sí, me gustaría que proteja a mi familia.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q10"
                                value="B"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q10", "B")}
                            />
                            No, prefiero un perro más relajado.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q10"
                                value="C"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q10", "C")}
                            />
                            Me gusta un equilibrio, que sea protector pero también amigable.
                        </label>
                        <br/>
                        <label className="respueta">
                            <input
                                type="radio"
                                name="q10"
                                value="D"
                                className="entrada-respuesta"
                                onChange={() => handleAnswerChange("q10", "D")}
                            />
                            No me importa que tan protector sea.
                        </label>
                    </div>

                    <button
                        className="boton-envio-test"
                        onClick={calculateResult}
                    >
                        Enviar
                    </button>
                </div>
            </div>
            <div id="area3">
                {result && (
                    <div className="contenedor-resultado-test">
                        <h2 className="resultado-test-titulo">¡Tu Raza Perfecta es: {result.general.name}!</h2>
                        <p className="resultado-test-descripcion">{result.general.shortDescription}</p>
                        <Link to={`/razas/${result.id}`} className="resultado-test-link">
                            <img
                                src={result.images.small.studio}
                                alt={result.general.name}
                                className="resultado-test-imagen"
                            />
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}