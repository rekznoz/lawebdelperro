import {getRazas} from "./GetRazas.jsx"

/**
 * Hook para obtener una raza
 * @param {Object} params - Parámetros de la petición
 * @param {string} params.id - Id de la raza
 * @returns {Object} Datos de la raza
 */
export async function GetDataRaza({params}) {
    try {

        const response = await getRazas()

        if (!response.razas) {
            throw new Response('Error al obtener la raza', {status: 404}, {message: 'Not Found'})
        }

        const raza = response.razas.find(raza => raza["id"].toLowerCase() === params.id.toLowerCase())

        if (!raza) {
            throw new Response('Error al obtener la raza', {status: 404}, {message: 'Not Found'})
        }

        return {raza}
    } catch (error) {
        console.error(error)
        return {raza: null}
    }
}