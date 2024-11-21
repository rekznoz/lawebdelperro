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

/*
 * Funciones de validación
 * validarNombre: Valida que el nombre tenga entre 3 y 50 caracteres y que solo contenga letras y espacios
 * validarEmail: Valida que el email tenga el formato correcto
 * validarTelefono: Valida que el teléfono tenga entre 8 y 15 caracteres y que solo contenga números
 * validarFecha: Valida que la fecha ingresada sea mayor a la fecha actual
 */
function validarNombre(nombre) {
    let verificacion = true
    if (nombre.length < 3) {
        verificacion = false
    }
    if (nombre.length > 50) {
        verificacion = false
    }
    if (!/^[a-zA-Z ]+$/.test(nombre)) {
        verificacion = false
    }
    return verificacion
}

function validarEmail(email) {
    let verificacion = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        verificacion = false
    }
    return verificacion
}

function validarTelefono(telefono) {
    let verificacion = true
    if (telefono.length < 8) {
        verificacion = false
    }
    if (telefono.length > 15) {
        verificacion = false
    }
    if (!/^[0-9]+$/.test(telefono)) {
        verificacion = false
    }
    return verificacion
}

function validarFecha(fecha) {
    let verificacion = true
    let fechaActual = new Date()
    let fechaIngresada = new Date(fecha)
    if (fechaIngresada < fechaActual) {
        verificacion = false
    }
    return verificacion
}

export default function Contacto() {

    const [formulario, setFormulario] = useState(forumarioDefecto)

    const {nombre, email, telefono, fecha, intereses, tienePerros, razaFavorita, mensaje} = formulario

    /*
        * Funciones que se ejecutan al salir de un campo
        * handleBlur: Valida que el campo nombre, email, telefono y fecha sean válidos
        * Si no son válidos, muestra un mensaje de error y limpia el campo
        * Si son válidos, guarda el valor en el estado formulario
        * hadnleChange: Guarda el valor de los campos en el estado formulario
        * handleCheck: Guarda los valores de los checkbox en el estado formulario
        * handleRadio: Guarda el valor del radio en el estado formulario
        * handleSubmit: Valida que los campos obligatorios no estén vacíos
        * Si están vacíos, muestra un mensaje de error
        * Si no están vacíos, muestra un mensaje de éxito y limpia el formulario
     */
    const handleBlur = (e) => {
        if (
            (e.target.name === 'nombre' && !validarNombre(e.target.value)) ||
            (e.target.name === 'email' && !validarEmail(e.target.value)) ||
            (e.target.name === 'telefono' && !validarTelefono(e.target.value)) ||
            (e.target.name === 'fecha' && !validarFecha(e.target.value))
        ) {

            const error = document.querySelector(`#${e.target.name}`).nextElementSibling
            error.textContent = `El campo ${e.target.name} es inválido`
            error.classList.add('ShowError')

            setFormulario({
                ...formulario,
                [e.target.name]: ''
            })
            return
        } else {
            const error = document.querySelector(`#${e.target.name}`).nextElementSibling
            error.textContent = ''
            error.classList.remove('ShowError')

            setFormulario({
                ...formulario,
                [e.target.name]: e.target.value
            })
        }
    }

    const hadnleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    // Funcion que se ejecuta cada vez que se cambia un checkbox
    const handleCheck = (e) => {
        const {value, checked} = e.target

        setFormulario((prevState) => {
            const interesesActualizados = checked
                ? [...prevState.intereses, value]
                : prevState.intereses.filter(interes => interes !== value)

            console.log(checked ? 'AGREGAR' : 'QUITAR', value)
            console.log(interesesActualizados)

            return {
                ...prevState,
                intereses: interesesActualizados
            }
        })
    }

    // Funcion que se ejecuta cada vez que se cambia un radio
    const handleRadio = (e) => {
        setFormulario({
            ...formulario,
            tienePerros: e.target.value
        })
        console.log(e.target.value)
    }

    // Funcion que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || fecha.trim() === '' || razaFavorita.trim() === '') {
            Swal.fire({
                title: 'Error',
                text: 'Todos los campos marcados con * son obligatorios',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return
        } else {
            Swal.fire({
                title: 'Mensaje Enviado',
                text: '¡Gracias por contactarnos!',
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
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" value={nombre}
                                   onBlur={handleBlur} onChange={hadnleChange}/>
                            <p className="FormError"></p>
                        </div>

                        <div className="opciones">
                            <label htmlFor="email"><span className='requiere'>*</span> Correo Electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="Tu correo electrónico"
                                   value={email} onBlur={handleBlur} onChange={hadnleChange}/>
                            <p className="FormError"></p>
                        </div>

                        <div className="opciones">
                            <label htmlFor="telefono"><span className='requiere'>*</span> Número de Teléfono:</label>
                            <input type="number" id="telefono" name="telefono" placeholder="Tu número de teléfono"
                                   value={telefono} onBlur={handleBlur} onChange={hadnleChange}/>
                            <p className="FormError"></p>
                        </div>

                        <div className="opciones">
                            <label htmlFor="fecha"><span className='requiere'>*</span> Fecha de Consulta:</label>
                            <input type="date" id="fecha" name="fecha" value={fecha} onBlur={handleBlur}
                                   onChange={hadnleChange}/>
                            <p className="FormError"></p>
                        </div>

                        <div className="opciones centrarcuadros">

                            <div className="gruporadio">
                                <label>
                                    <p><span className='requiere'>*</span> ¿Tienes perros?</p>
                                </label>
                                <label>
                                    <input type="radio" name="tienePerros" value="si" onChange={handleRadio}
                                           checked={tienePerros === 'si'}/>
                                    <span>Si</span>
                                </label>
                                <label>
                                    <input type="radio" name="tienePerros" value="no" onChange={handleRadio}
                                           checked={tienePerros === 'no'}/>
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
                                    <input type="checkbox" name="intereses" value="alimentacion"
                                           onChange={handleCheck}/>
                                    <span>Alimentación de Perros </span>
                                </label>
                                <label className="contenedorCheck">
                                    <input type="checkbox" name="intereses" value="salud" onChange={handleCheck}/>
                                    <span>Salud de Perros </span>
                                </label>
                            </div>

                        </div>

                        <div className="opciones">
                            <label htmlFor="razaFavorita"><span className='requiere'>*</span> Raza de Perro
                                Favorita:</label>
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
                            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" value={mensaje}
                                      onChange={hadnleChange}/>
                        </div>

                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </>
    )
}