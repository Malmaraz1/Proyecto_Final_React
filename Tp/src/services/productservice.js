import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";
const productsRef = collection(db, "products");

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.doc.map((doc) => {
        return {id : doc.id , ...doc.data()}
    })

  } catch (err) {

  }
};
