export async function getRazas() {
    try {
        const response = await fetch('https://registry.dog/api/v1')

        if (!response.ok) {
            throw new Response('Error al obtener las razas', {status: 404}, {message: 'Not Found'})
        }

        const data = await response.json()

        if (!data) {
            throw new Response('Error al obtener las razas', {status: 404}, {message: 'Not Found'})
        }

        if (!data.data) {
            throw new Response('Error al obtener las razas', {status: 404}, {message: 'Not Found'})
        }

        // Ordenar alfabeticamente
        data.data.sort((a, b) => a["general"]["name"].localeCompare(b["general"]["name"]))

        return {razas: data.data}
    } catch (error) {
        console.error(error)
        return {razas: null}
    }
}