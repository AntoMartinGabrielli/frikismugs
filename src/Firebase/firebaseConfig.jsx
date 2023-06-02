import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPRD4cCc7uo4MrZhI-MkIoY-FXkhtbbBU",
    authDomain: "frikismugs.firebaseapp.com",
    projectId: "frikismugs",
    storageBucket: "frikismugs.appspot.com",
    messagingSenderId: "845876703962",
    appId: "1:845876703962:web:4e3e16532bb5aa1a06ebe3"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


