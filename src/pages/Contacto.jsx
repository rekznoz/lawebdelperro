import '../css/formulario.css'
import Swal from "sweetalert2"

// Recoge los datos del formulario
import {Formik} from 'formik'
// https://formik.org/docs/overview

// Validar los datos del formulario con Yup
import {object, string, array} from 'yup'
// https://www.npmjs.com/package/yup

const forumarioDefecto = {
    nombre: '',
    email: '',
    telefono: '',
    intereses: [],
    tienePerros: 'no',
    razaFavorita: '',
    mensaje: ''
}

const validationSchema = object({
    nombre: string()
        .trim()
        .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras y espacios')
        .required('El campo nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .max(50, 'El nombre debe tener como máximo 50 caracteres'),
    email: string()
        .trim()
        .lowercase()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'El email no es válido')
        .required('El campo email es obligatorio')
        .email('El email no es válido'),
    telefono: string()
        .trim()
        .matches(/^[0-9]*$/, 'El teléfono solo puede contener números')
        .required('El campo teléfono es obligatorio')
        .min(8, 'El teléfono debe tener al menos 8 caracteres')
        .max(15, 'El teléfono debe tener como máximo 15 caracteres'),
    intereses: array()
        .required('El campo intereses es obligatorio'),
    razaFavorita: string()
        .required('El campo raza favorita es obligatorio'),
    mensaje: string()
        .max(100, 'El mensaje debe tener como máximo 100 caracteres')
})

const contieneInteres = (intereses, interes) => {
    return intereses.includes(interes)
}

/**
 * Componente que muestra el formulario de contacto
 * @returns {JSX.Element} Componente
 */
export default function Contacto() {

    const onSubmit = (values, funciones) => {
        const {nombre, email, telefono, intereses, tienePerros, razaFavorita, mensaje} = values
        const {resetForm} = funciones
        Swal.fire({
            title: 'Mensaje Enviado',
            text: `Gracias por contactarnos ${nombre}.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })

        console.log('Nombre:', nombre)
        console.log('Email:', email)
        console.log('Teléfono:', telefono)
        console.log('Intereses:', intereses)
        console.log('Tiene perros:', tienePerros)
        console.log('Raza favorita:', razaFavorita)
        console.log('Mensaje:', mensaje)

        resetForm()
    }

    return (
        <>
            <div id='area1'>
                <h1>Contacto</h1>
            </div>
            <div id='area2'>
                <Formik initialValues={forumarioDefecto} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <div className="contFormContacto">
                            <h3>¿Tienes alguna duda o comentario sobre razas de perros?</h3>
                            <h3>¡Nos encantaría ayudarte!</h3>
                            <form onSubmit={handleSubmit}>

                                <div className="opciones">
                                    <label htmlFor="nombre"><span className='requiere'>*</span> Nombre:</label>
                                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo"
                                           value={values.nombre}
                                           onBlur={handleBlur} onChange={handleChange}/>
                                    {touched.nombre && errors.nombre ? <p className="FormError">{errors.nombre}</p> : null}
                                </div>

                                <div className="opciones">
                                    <label htmlFor="email"><span className='requiere'>*</span> Correo
                                        Electrónico:</label>
                                    <input type="email" id="email" name="email" placeholder="Tu correo electrónico"
                                           value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                                    {touched.email && errors.email ? <p className="FormError">{errors.email}</p> : null}
                                </div>

                                <div className="opciones">
                                    <label htmlFor="telefono"><span className='requiere'>*</span> Número de
                                        Teléfono:</label>
                                    <input type="number" id="telefono" name="telefono"
                                           placeholder="Tu número de teléfono"
                                           value={values.telefono} onBlur={handleBlur} onChange={handleChange}/>
                                    {touched.telefono && errors.telefono ? <p className="FormError">{errors.telefono}</p> : null}
                                </div>

                                <div className="opciones centrarcuadros">

                                    <div className="gruporadio">
                                        <label>
                                            <p><span className='requiere'>*</span> ¿Tienes perros?</p>
                                        </label>
                                        <label>
                                            <input type="radio" name="tienePerros" value="si" onChange={handleChange}
                                                   checked={values.tienePerros === 'si'}/>
                                            <span>Si</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="tienePerros" value="no" onChange={handleChange}
                                                   checked={values.tienePerros === 'no'}/>
                                            <span>No</span>
                                        </label>
                                    </div>

                                    <div className="grupocheck">
                                        <label className="contenedorCheck">
                                            <input type="checkbox" name="intereses" value="razas"
                                                   onChange={handleChange} checked={contieneInteres(values.intereses, 'razas')}/>
                                            <span>Razas de Perros </span>
                                        </label>
                                        <label className="contenedorCheck">
                                            <input type="checkbox" name="intereses" value="cuidados"
                                                   onChange={handleChange} checked={contieneInteres(values.intereses, 'cuidados')}/>
                                            <span>Cuidados de Perros </span>
                                        </label>
                                        <label className="contenedorCheck">
                                            <input type="checkbox" name="intereses" value="alimentacion"
                                                   onChange={handleChange} checked={contieneInteres(values.intereses, 'alimentacion')}/>
                                            <span>Alimentación de Perros </span>
                                        </label>
                                        <label className="contenedorCheck">
                                            <input type="checkbox" name="intereses" value="salud"
                                                   onChange={handleChange} checked={contieneInteres(values.intereses, 'salud')}/>
                                            <span>Salud de Perros </span>
                                        </label>
                                    </div>

                                </div>

                                <div className="opciones">
                                    <label htmlFor="razaFavorita"><span className='requiere'>*</span> Raza de Perro
                                        Favorita:</label>
                                    <select id="razaFavorita" name="razaFavorita" onBlur={handleBlur} onChange={handleChange}>
                                        <option value="">Selecciona una raza</option>
                                        <option value="labrador">Labrador Retriever</option>
                                        <option value="pastorAleman">Pastor Alemán</option>
                                        <option value="bulldog">Bulldog</option>
                                        <option value="poodle">Poodle</option>
                                        <option value="golden">Golden Retriever</option>
                                    </select>
                                    {touched.razaFavorita && errors.razaFavorita ?
                                        <p className="FormError">{errors.razaFavorita}</p> : null}
                                </div>

                                <div className="opciones">
                                    <label htmlFor="mensaje">Mensaje:</label>
                                    <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí"
                                              value={values.mensaje}
                                              onBlur={handleBlur}
                                              onChange={handleChange}/>
                                </div>

                                <button type="submit" disabled={isSubmitting}>Enviar</button>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </>
    )

}