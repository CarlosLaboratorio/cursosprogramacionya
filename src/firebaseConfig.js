import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbC8XAa3JOKttFI9GSGI9O4V4j8RGx7j0",
    authDomain: "cursos-programacion-fd960.firebaseapp.com",
    projectId: "cursos-programacion-fd960",
    storageBucket: "cursos-programacion-fd960.firebasestorage.app",
    messagingSenderId: "164389569473",
    appId: "1:164389569473:web:e6f33402a10f66f801e540"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);