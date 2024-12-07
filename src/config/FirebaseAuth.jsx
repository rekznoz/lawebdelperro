// Import the functions you need from the SDKs you need
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import app from "./FirebaseConfig.jsx"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Inicializar autenticación
export const auth = getAuth(app)

/**
 * Función que realiza el login en Firebase
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise} Promesa con el resultado
 */
export function firebaseLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

/**
 * Función que realiza el registro en Firebase
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise} Promesa con el resultado
 */
export function firebaseRegistro(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

/**
 * Función que realiza el logout en Firebase
 * @returns {Promise} Promesa con el resultado
 */
export function firebaseLogout() {
    return auth.signOut()
}