
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIt_zr_1rbUsOA_BYgVh00qKil7Hb7kUA",
  authDomain: "miniblog-a3b4c.firebaseapp.com",
  projectId: "miniblog-a3b4c",
  storageBucket: "miniblog-a3b4c.appspot.com",
  messagingSenderId: "632600533351",
  appId: "1:632600533351:web:e0270e9c4babcd45d637c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db}