import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore'; // Agrega la importación de Firestore

const firebaseConfig = {
  apiKey: 'AIzaSyDg0gk9jvdvHxID-NUQ150yst90nbrBogg',
  authDomain: 'idun-32aa8.firebaseapp.com',
  projectId: 'idun-32aa8',
  storageBucket: 'idun-32aa8.appspot.com',
  messagingSenderId: '148545483885',
  appId: '1:148545483885:web:161934a9e6917bcd07fb64',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app); // Obtiene la instancia de Firestore

export { app, auth, database, firestore };

