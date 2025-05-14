// Substitua com suas próprias credenciais (vou te mostrar onde achar)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC61ggGGT8GzfI7uPVXTBsX4YluTpsfoTk",
    authDomain: "festa-junina-1b1d3.firebaseapp.com",
    projectId: "festa-junina-1b1d3",
    storageBucket: "festa-junina-1b1d3.firebasestorage.app",
    messagingSenderId: "670744732965",
    appId: "1:670744732965:web:a411bf3e9e084f08f526cc"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
