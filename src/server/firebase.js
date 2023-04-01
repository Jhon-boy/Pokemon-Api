import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

//Inicializamos la App 
const firebaseConfig = {
  apiKey: "AIzaSyDEePpIsAXevrJNuBiiLuR9ImvcYUqCXBE",
  authDomain: "pokemon-api-43f1d.firebaseapp.com",
  projectId: "pokemon-api-43f1d",
  storageBucket: "pokemon-api-43f1d.appspot.com",
  messagingSenderId: "294287313359",
  appId: "1:294287313359:web:343a1b08d483e6e3fa6aba"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export default app;