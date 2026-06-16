import {getFirestore} from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCoVSyeeaNoCGj-dOWhXWOMLMXiM_DKrLM",
  authDomain: "talentotechtpfinal.firebaseapp.com",
  projectId: "talentotechtpfinal",
  storageBucket: "talentotechtpfinal.firebasestorage.app",
  messagingSenderId: "614647322900",
  appId: "1:614647322900:web:4cff3c1de1cf9b747d4a01"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}