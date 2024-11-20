import '../css/formulario.css'
import {useState} from "react"
import Swal from "sweetalert2"

const forumarioDefecto = {
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    intereses: [],
    tienePerros: 'no',
    razaFavorita: '',
    mensaje: ''
}

function validarNombre(nombre) {
    if (nombre !== '') {
        let verificacion = true
        let error = ''
        if (nombre.length < 3) {
            verificacion = false
            error = 'El nombre debe tener al menos 3 caracteres'
        }
        if (nombre.length > 50) {
            verificacion = false
            error = 'El nombre debe tener como máximo 50 caracteres'
        }
        if (!/^[a-zA-Z ]+$/.test(nombre)) {
            verificacion = false
            error = 'El nombre solo puede contener letras y espacios'
        }
        if (!verificacion) {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        return verificacion
    }
}

function validarEmail(email) {
    if (email !== '') {
        let verificacion = true
        let error = ''
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            verificacion = false
            error = 'El correo electrónico no es válido'
        }
        if (!verificacion) {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        return verificacion
    }
}

function validarTelefono(telefono) {
    if (telefono !== '') {
        let verificacion = true
        let error = ''
        if (telefono.length < 8) {
            verificacion = false
            error = 'El teléfono debe tener al menos 8 caracteres'
        }
        if (telefono.length > 15) {
            verificacion = false
            error = 'El teléfono debe tener como máximo 15 caracteres'
        }
        if (!/^[0-9]+$/.test(telefono)) {
            verificacion = false
            error = 'El teléfono solo puede contener números'
        }
        if (!verificacion) {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        return verificacion
    }
}

function validarFecha(fecha) {
    if (fecha !== '') {
        let verificacion = true
        let error = ''
        let fechaActual = new Date()
        let fechaIngresada = new Date(fecha)
        if (fechaIngresada < fechaActual) {
            verificacion = false
            error = 'La fecha debe ser mayor a la fecha actual'
        }
        if (!verificacion) {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        return verificacion
    }
}

export default function Contacto() {

    const [formulario, setFormulario] = useState(forumarioDefecto)

    const {nombre, email, telefono, fecha, intereses, tienePerros, razaFavorita, mensaje} = formulario

    const handleBlur = (e) => {
        if (e.target.name === 'nombre') {
            if (!validarNombre(e.target.value)) {
                return
            }
        }
        if (e.target.name === 'email') {
            if (!validarEmail(e.target.value)) {
                return
            }
        }
        if (e.target.name === 'telefono') {
            if (!validarTelefono(e.target.value)) {
                return
            }
        }
        if (e.target.name === 'fecha') {
            if (!validarFecha(e.target.value)) {
                return
            }
        }
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const hadnleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    // Funcion que se ejecuta cada vez que se cambia un checkbox
    const handleCheck = (e) => {
        const { value, checked } = e.target;

        setFormulario((prevState) => {
            const interesesActualizados = checked
                ? [...prevState.intereses, value]
                : prevState.intereses.filter(interes => interes !== value);

            console.log(checked ? 'AGREGAR' : 'QUITAR', value);
            console.log('Intereses actualizados:', interesesActualizados);

            return {
                ...prevState,
                intereses: interesesActualizados
            };
        });
    };

    // Funcion que se ejecuta cada vez que se cambia un radio
    const handleRadio = (e) => {
        setFormulario({
            ...formulario,
            tienePerros: e.target.value
        })
    }

    // Funcion que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validarNombre(nombre) || !validarEmail(email) || !validarTelefono(telefono) || !validarFecha(fecha)) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa correctamente los campos requeridos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            Swal.fire({
                title: 'Mensaje Enviado',
                text: '¡Gracias por contactarnos! Nos pondremos en contacto contigo en la fecha indicada',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            setFormulario(forumarioDefecto)
        }
        console.log(formulario)
    }

    return (
        <>
            <div id='area1'>
                <h1>Contacto</h1>
            </div>
            <div id='area2'>
                <div className="contFormContacto">
                    <h2>Formulario de Contacto</h2>
                    <h3>¿Tienes alguna duda o comentario sobre razas de perros?</h3>
                    <h3>¡Nos encantaría ayudarte!</h3>
                    <form onSubmit={handleSubmit}>

                        <div className="opciones">
                            <label htmlFor="nombre"><span className='requiere'>*</span> Nombre:</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" value={nombre} onBlur={handleBlur} onChange={hadnleChange}/>
                        </div>

                        <div className="opciones">
                            <label htmlFor="email"><span className='requiere'>*</span> Correo Electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" value={email} onBlur={handleBlur} onChange={hadnleChange}/>
                        </div>

                        <div className="opciones">
                            <label htmlFor="telefono"><span className='requiere'>*</span> Número de Teléfono:</label>
                            <input type="number" id="telefono" name="telefono" placeholder="Tu número de teléfono" value={telefono} onBlur={handleBlur} onChange={hadnleChange}/>
                        </div>

                        <div className="opciones">
                            <label htmlFor="fecha"><span className='requiere'>*</span> Fecha de Consulta:</label>
                            <input type="date" id="fecha" name="fecha" value={fecha} onBlur={handleBlur} onChange={hadnleChange}/>
                        </div>

                        <div className="opciones centrarcuadros">

                            <div className="gruporadio">
                                <label>
                                    <p><span className='requiere'>*</span> ¿Tienes perros?</p>
                                </label>
                                <label>
                                    <input type="radio" name="tienePerros" value="si" onChange={hadnleChange} checked={tienePerros === 'si'}/>
                                    <span>Si</span>
                                </label>
                                <label>
                                    <input type="radio" name="tienePerros" value="no" onChange={hadnleChange} checked={tienePerros === 'no'}/>
                                    <span>No</span>
                                </label>
                            </div>

                            <div className="grupocheck">
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="razas" onChange={handleCheck}/>
                                    <span>Razas de Perros </span>
                                </label>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="cuidados" onChange={handleCheck}/>
                                    <span>Cuidados de Perros </span>
                                </label>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="alimentacion" onChange={handleCheck}/>
                                    <span>Alimentación de Perros </span>
                                </label>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="salud" onChange={handleCheck}/>
                                    <span>Salud de Perros </span>
                                </label>
                            </div>

                        </div>

                        <div className="opciones">
                            <label htmlFor="razaFavorita"><span className='requiere'>*</span> Raza de Perro Favorita:</label>
                            <select id="razaFavorita" name="razaFavorita" onChange={hadnleChange}>
                                <option value="" disabled>Selecciona una raza</option>
                                <option value="labrador">Labrador Retriever</option>
                                <option value="pastorAleman">Pastor Alemán</option>
                                <option value="bulldog">Bulldog</option>
                                <option value="poodle">Poodle</option>
                                <option value="golden">Golden Retriever</option>
                            </select>
                        </div>

                        <div className="opciones">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" value={mensaje} onChange={hadnleChange}/>
                        </div>

                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </>
    )
}