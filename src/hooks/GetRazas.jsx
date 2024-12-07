export async function getRazas(razasContext = null) {
    if (razasContext) {
        return razasContext
    }
    try {
        const response = await fetch('https://registry.dog/api/v1')

        if (!response.ok) {
            throw new Error('Error al obtener las razas: ' + response.statusText)
        }

        const data = await response.json()

        if (!data || !data.data) {
            throw new Error('Error: Datos no encontrados o mal formateados')
        }

        // Ordenar alfabeticamente
        const razas = data.data.sort((a, b) => a["general"]["name"].localeCompare(b["general"]["name"]))

        return { razas }
    } catch (error) {
        console.error(error)
        return { razas: null, error: error.message }
    }
}
