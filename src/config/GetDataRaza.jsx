import {getRazas} from "./GetRazas.jsx";

export async function getDataRaza({params}) {
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