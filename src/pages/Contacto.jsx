import '../css/formulario.css';

export default function Contacto() {
    return (
        <>
            <div id='area1'>
                <h1>Contacto</h1>
            </div>
            <div id='area2'>
                <div className="contFormContacto">
                    <h2>Formulario de Contacto</h2>
                    <p>¿Tienes alguna duda o comentario sobre razas de perros? ¡Nos encantaría ayudarte!</p>
                    <form action="/enviar-mensaje" method="POST">

                        <div className="opciones">
                            <label htmlFor="nombre"><span className='requiere'>*</span> Nombre:</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo"/>
                        </div>

                        <div className="opciones">
                            <label htmlFor="email"><span className='requiere'>*</span> Correo Electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="Tu correo electrónico"/>
                        </div>

                        <div className="opciones">
                            <label htmlFor="telefono"><span className='requiere'>*</span> Número de Teléfono:</label>
                            <input type="number" id="telefono" name="telefono" placeholder="Tu número de teléfono"/>
                        </div>

                        <div className="opciones">
                            <label htmlFor="fecha"><span className='requiere'>*</span> Fecha de Consulta:</label>
                            <input type="date" id="fecha" name="fecha"/>
                        </div>

                        <div className="opciones centrarcuadros">
                            <div className="grupocheck">
                                <h3>Selecciona tus intereses:</h3>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="informacion"/>
                                    <span>Información sobre razas</span>
                                </label>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="adopcion"/>
                                    <span>Consejos de adopción</span>
                                </label>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="salud"/>
                                    <span>Salud y cuidados</span>
                                </label>
                            </div>
                            <div className="gruporadio">
                                <h3>¿Tienes perros actualmente?</h3>
                                <label className="contenedorRadio">
                                    <input type="radio" name="tienePerros" value="si" required/>
                                    <span>Sí</span>
                                </label>
                                <label className="contenedorRadio">
                                    <input type="radio" name="tienePerros" value="no"/>
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div className="opciones">
                            <label htmlFor="razaFavorita"><span className='requiere'>*</span> Raza de Perro
                                Favorita:</label>
                            <select id="razaFavorita" name="razaFavorita" required>
                                <option value="" disabled selected>Selecciona una raza</option>
                                <option value="labrador">Labrador Retriever</option>
                                <option value="pastorAleman">Pastor Alemán</option>
                                <option value="bulldog">Bulldog</option>
                                <option value="poodle">Poodle</option>
                                <option value="golden">Golden Retriever</option>
                            </select>
                        </div>

                        <div className="opciones">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" required></textarea>
                        </div>

                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </>
    )
}