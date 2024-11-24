// Import the functions you need from the SDKs you need
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from "./FirebaseConfig.jsx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Inicializar autenticación
export const auth = getAuth(app);

// Login de usuario
export function firebaseLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Registro de usuario
export function firebaseRegistro(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Log out
export function firebaseLogout() {
    return auth.signOut();
}