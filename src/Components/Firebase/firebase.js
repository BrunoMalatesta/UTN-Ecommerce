import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZFcLhXwP-yRxuszwo8BR9C6DzE7uKyLo",
  authDomain: "tienda-online-dani.firebaseapp.com",
  projectId: "tienda-online-dani",
  storageBucket: "tienda-online-dani.appspot.com",
  messagingSenderId: "1004391236108",
  appId: "1:1004391236108:web:9d73ecdfc4385d699f6429"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 