import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import app from "./FirebaseConfig.jsx";

// Inicializar Firestore
const db = getFirestore(app);

// Función para agregar los favoritos de los usuarios
export async function agregarFavorito(id, data) {
    try {
        const favoritoRef = doc(db, 'perros_favoritos', id); // Crea una referencia al documento
        await setDoc(favoritoRef, data); // Agrega o reemplaza los datos en el documento
        console.log("Favorito agregado exitosamente");
    } catch (error) {
        console.error("Error al agregar favorito:", error);
    }
}

// Función para obtener los favoritos de un usuario
export async function obtenerFavoritos(id) {
    try {
        const favoritoRef = doc(db, 'perros_favoritos', id); // Crea una referencia al documento
        const favoritoSnap = await favoritoRef.get(); // Obtiene los datos del documento
        if (favoritoSnap.exists()) {
            return favoritoSnap.data();
        } else {
            console.log("No hay favoritos");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener favoritos:", error);
    }
}

// Función para eliminar un favorito
export async function eliminarFavorito(id) {
    try {
        const favoritoRef = doc(db, 'perros_favoritos', id); // Crear referencia al documento
        await deleteDoc(favoritoRef); // Eliminar el documento
        console.log("Favorito eliminado exitosamente");
    } catch (error) {
        console.error("Error al eliminar favorito:", error);
    }
}

// Función para eliminar todos los favoritos de un usuario
export async function eliminarFavoritosDeUsuario(usuarioId) {
    try {
        const favoritoRef = doc(db, 'perros_favoritos', usuarioId); // Crear referencia al documento
        await deleteDoc(favoritoRef); // Eliminar el documento
        console.log("Favoritos eliminados exitosamente");
    } catch (error) {
        console.error("Error al eliminar favoritos:", error);
    }
}

// Prueba de agregar
const data = {
    nombre: "Firulais",
    raza: "Labrador",
    edad: 5
}
agregarFavorito("usuario1", data).then(() => {
    console.log("Favorito agregado");
})

// Prueba de obtener
obtenerFavoritos("usuario1").then((favoritos) => {
    console.log(favoritos);
});

// Prueba de eliminar
eliminarFavorito("usuario1");

