import {addDoc, collection, doc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import app from "./FirebaseConfig.jsx";
import {useEffect, useState} from "react";

// Inicializar Firestore
const db = getFirestore(app);

/*
 * Obtiene una coleccion de la base de datos
 * @param {string} collectionName - Nombre de la coleccion
 * @returns {Promise<null|Array>} - Retorna un array con los documentos de la coleccion o null si no hay documentos
 */
async function getCollectionFireStore(collectionName) {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        if (querySnapshot.empty) {
            console.log('No hay documentos en la coleccion.');
            return null;
        }
        return querySnapshot.docs.map(doc => doc.data());
    } catch (error) {
        console.error("Error fetching collection: ", error);
        return null;
    }
}


/*
 * Obtiene un documento de la base de datos
 * @param {string} id - ID del documento
 * @returns {Promise<null|Object>} - Retorna un objeto con los datos del documento o null si no existe
 */
async function getUsuarioFireStore(collectionName, id) {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        if (querySnapshot.empty) {
            console.log('No hay documentos en la coleccion.');
            return null;
        } else {
            const doc = querySnapshot.docs.find(doc => doc.id === id);
            return doc ? doc.data() : null;
        }
    } catch (error) {
        console.error("Error fetching user data: ", error);
        return null;
    }
}



/*
 * Agrega un documento a la base de datos
 * @param {string} collectionName - Nombre de la coleccion
 * @param {Object} data - Datos del documento
 * @param {string} id - ID del documento
 */
async function addDocumentFireStore(collectionName, data, id = null) {
    if (!id) {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);
    } else {
        const docRef = doc(db, collectionName, id)
        await setDoc(docRef, data)
        console.log("Document written with ID: ", docRef.id);
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
    console.log("Document written with ID: ", docRef.id);
}

/*
 * Actualiza un documento de la base de datos
 */
export function GetUsuarios(nombreDB) {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        getCollectionFireStore(nombreDB)
            .then(data => {
                setUsuarios(data)
            })
    })
    return usuarios
}

/*
 * Obtiene un documento de la base de datos
 */
export function GetUserData(nombreDB, id) {
    return getUsuarioFireStore(nombreDB, id)
        .then(data => data)
        .catch(error => {
            console.error("Error fetching user data: ", error);
            return null;
        });
}

/*
 * Agrega un documento a la base de datos
 */
export function AgregarUsuario(nombreDB, data, id) {
    addDocumentFireStore(nombreDB, data, id)
}

/*
 * Actualiza un documento de la base de datos
 */
export function ActualizarUsuario(nombreDB, data, id) {
    setDocumentFireStore(nombreDB, data, id)
}