import { initializeApp } from 'firebase/app';


//Inicializamos la App 
const firebaseConfig = {
  apiKey: "AIzaSyDEePpIsAXevrJNuBiiLuR9ImvcYUqCXBE",
  authDomain: "pokemon-api-43f1d.firebaseapp.com",
  projectId: "pokemon-api-43f1d",
  storageBucket: "pokemon-api-43f1d.appspot.com",
  messagingSenderId: "294287313359",
  appId: "1:294287313359:web:343a1b08d483e6e3fa6aba"
};

const app = initializeApp(firebaseConfig);

export default app;