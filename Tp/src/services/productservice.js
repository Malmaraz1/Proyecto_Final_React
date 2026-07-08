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

    // Transformamos el array de documentos de Firebase a objetos legibles
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat; // Retorna el array con TODOS los productos
  } catch (err) {
    console.error("Error al traer todos los productos: ", err);
    return []; // Retorna un array vacío si hay error para que no rompa el .map()
  }
};

export const getProductoById = async (id) => {
  try {
    const productRef = doc(db, "products", id);

    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por id :", error);
    return null;
  }
};

export const getByCategory = async (category) => {
  try {
    let queryRef;

    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }
    const snapshot = await getDocs(queryRef);
    const productsFormat = snapshot.doc.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos por categoria: ", err);
    return [];
  }
};

export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear productos: ", error);
    throw error;
  }
};
