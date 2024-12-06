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
 */
export function AgregarUsuario(nombreDB, data, id) {
    return addDocumentFireStore(nombreDB, data, id)
}

/*
 * Actualiza un documento de la base de datos
 */
export function ActualizarUsuario(nombreDB, data, id) {
    return setDocumentFireStore(nombreDB, data, id)
}

export const sincronizarFavoritos = async (usuario, favoritos) => {
    if (!usuario) return // Solo sincroniza si el usuario está autenticado
    const userDocRef = doc(db, "favoritos", usuario.uid)
    try {
        await setDoc(userDocRef, { favoritos }, { merge: true })
        console.log("Favoritos sincronizados con Firestore")
    } catch (error) {
        console.error("Error al sincronizar favoritos:", error)
    }
}

export const obtenerFavoritos = async (usuario) => {
    if (!usuario) return []
    const userDocRef = doc(db, "favoritos", usuario.uid)

    try {
        const userDoc = await getDoc(userDocRef)
        return userDoc.exists() ? userDoc.data().favoritos : []
    } catch (error) {
        console.error("Error al obtener favoritos:", error)
        return []
    }
}

export const sincronizarUsuario = async (usuario, perfil) => {
    if (!usuario) return
    const userDocRef = doc(db, "usuarios", usuario.uid)
    try {
        await setDoc(userDocRef, perfil, { merge: true })
        console.log("Perfil sincronizado con Firestore")
    } catch (error) {
        console.error("Error al sincronizar perfil:", error)
    }
}

export const obtenerUsuario = async (usuario) => {
    if (!usuario) return {}
    const userDocRef = doc(db, "usuarios", usuario.uid)
    try {
        const userDoc = await getDoc(userDocRef)
        return userDoc.exists() ? userDoc.data() : {}
    } catch (error) {
        console.error("Error al obtener perfil:", error)
        return {}
    }
}
