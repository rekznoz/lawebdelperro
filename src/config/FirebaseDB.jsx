import {addDoc, collection, doc, getDocs, getFirestore, setDoc, getDoc} from "firebase/firestore"
import app from "./FirebaseConfig.jsx"

// Inicializar Firestore
const db = getFirestore(app)

/*
 * Agrega un documento a la base de datos
 * @param {string} collectionName - Nombre de la coleccion
 * @param {Object} data - Datos del documento
 * @param {string} id - ID del documento
 */
async function addDocumentFireStore(collectionName, data, id = null) {
    if (!id) {
        const docRef = await addDoc(collection(db, collectionName), data)
        console.log("Document written with ID: ", docRef.id)
    } else {
        const docRef = doc(db, collectionName, id)
        await setDoc(docRef, data)
        console.log("Document written with ID: ", docRef.id)
    }
}

/*
 * Actualiza un documento de la base de datos
 * @param {string} collectionName - Nombre de la coleccion
 * @param {Object} data - Datos del documento
 * @param {string} id - ID del documento
 */
async function setDocumentFireStore(collectionName, data, id) {
    const docRef = doc(db, collectionName, id)
    await setDoc(docRef, data)
    console.log("Document written with ID: ", docRef.id)
}


/*
 * Agrega un documento a la base de datos
 * @param {string} nombreDB - Nombre de la coleccion
 * @param {Object} data - Datos del documento
 * @param {string} id - ID del documento
 * @returns {Promise} - Promesa con el resultado
 */
export function AgregarUsuario(nombreDB, data, id) {
    return addDocumentFireStore(nombreDB, data, id)
}

/*
 * Actualiza un documento de la base de datos
 * @param {string} nombreDB - Nombre de la coleccion
 * @param {Object} data - Datos del documento
 * @param {string} id - ID del documento
 * @returns {Promise} - Promesa con el resultado
 */
export function ActualizarUsuario(nombreDB, data, id) {
    return setDocumentFireStore(nombreDB, data, id)
}

/*
 * Obtiene los documentos de una colección
 * @param {string} collectionName - Nombre de la coleccion
 * @returns {Array} - Lista de documentos
 */
export const sincronizarFavoritos = async (uid, favoritos) => {
    if (!uid) return // Solo sincroniza si el usuario está autenticado
    const userDocRef = doc(db, "favoritos", uid)
    try {
        await setDoc(userDocRef, { favoritos }, { merge: true })
        console.log("Favoritos sincronizados con Firestore")
    } catch (error) {
        console.error("Error al sincronizar favoritos:", error)
    }
}

/*
 * Obtiene los favoritos de un usuario
 * @param {string} uid - ID del usuario
 * @returns {Array} - Lista de favoritos
 */
export const obtenerFavoritos = async (uid) => {
    if (!uid) return []
    const userDocRef = doc(db, "favoritos", uid)

    try {
        const userDoc = await getDoc(userDocRef)
        return userDoc.exists() ? userDoc.data().favoritos : []
    } catch (error) {
        console.error("Error al obtener favoritos:", error)
        return []
    }
}

/*
 * Sincroniza el perfil de un usuario
 * @param {string} uid - ID del usuario
 * @param {Object} perfil - Datos del usuario
 */
export const sincronizarUsuario = async (uid, perfil) => {
    if (!uid) return
    const userDocRef = doc(db, "usuarios", uid)
    try {
        await setDoc(userDocRef, perfil, { merge: true })
        console.log("Perfil sincronizado con Firestore")
    } catch (error) {
        console.error("Error al sincronizar perfil:", error)
    }
}

/*
 * Obtiene los datos de un usuario
 * @param {string} uid - ID del usuario
 * @returns {Object} - Datos del usuario
 */
export const obtenerUsuario = async (uid) => {
    if (!uid) return {}
    const userDocRef = doc(db, "usuarios", uid)
    try {
        const userDoc = await getDoc(userDocRef)
        return userDoc.exists() ? userDoc.data() : {}
    } catch (error) {
        console.error("Error al obtener perfil:", error)
        return {}
    }
}

/*
 * Obtiene los IDs de los usuarios
 * @returns {Array} - Lista de IDs de usuarios
 */
export const obtenerIDsUsuarios = async () => {
    const usuariosCollection = collection(db, "usuarios")
    try {
        const usuariosDocs = await getDocs(usuariosCollection)
        return usuariosDocs.docs.map(doc => doc.id)
    } catch (error) {
        console.error("Error al obtener usuarios:", error)
        return []
    }
}

/*
 * Obtiene los favoritos de un usuario
 * @param {Object} params - Parametros de la petición
 * @param {string} params.id - ID del usuario
 * @returns {Array} - Lista de favoritos
 */
export const obtenerFavoritosPublico = async ({params}) => {
    if (!params.id) {
        throw new Response('El usuario no existe', {status: 404}, {message: 'Not Found'})
    }
    const userDocRef = doc(db, "favoritos", params.id)
    try {
        const userDoc = await getDoc(userDocRef)
        if (userDoc.exists()) {
            return userDoc.data().favoritos
        } else {
            throw new Response('El usuario no existe', {status: 404}, {message: 'Not Found'})
        }
    } catch (error) {
        console.error("Error al obtener favoritos:", error)
        return []
    }
}

/*
 * Obtiene los datos de un usuario
 * @param {Object} params - Parametros de la petición
 * @param {string} params.id - ID del usuario
 * @returns {Object} - Datos del usuario
 */
export const obtenerUsuarioPublico = async ({params}) => {
    if (!params.id) {
        throw new Response('El usuario no existe', {status: 404}, {message: 'Not Found'})
    }
    const userDocRef = doc(db, "usuarios", params.id)
    try {
        const userDoc = await getDoc(userDocRef)
        if (userDoc.exists()) {
            return {...userDoc.data(), uid: userDoc.id}
        } else {
            throw new Response('El usuario no existe', {status: 404}, {message: 'Not Found'})
        }
    } catch (error) {
        console.error("Error al obtener perfil:", error)
        throw new Response('El usuario no existe', {status: 404}, {message: 'Not Found'})
    }
}