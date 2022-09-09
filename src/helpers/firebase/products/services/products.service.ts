import {
  query,
  orderBy,
  limit,
  getDocs,
  addDoc,
  collection,
  getDoc,
  doc,
  startAfter,
  where,
} from "firebase/firestore";
import { firestore } from "../../config";
import type { Product } from "@chia/shared/types/product";
import { dataToJSON } from "../repositories";

export const addProduct = async (product: Product) => {
  try {
    return await addDoc(collection(firestore, "products"), product);
  } catch (e) {
    console.error("Error adding doc", e);
    throw e;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const ref = collection(firestore, "products");
    const productsQuery = query(ref, orderBy("createdAt", "desc"), limit(8));

    return (await getDocs(productsQuery)).docs.map(dataToJSON);
  } catch (e) {
    console.error("Error getting doc", e);
    throw e;
  }
};

export const getMoreProducts = async (id: string): Promise<Product[]> => {
  try {
    const ref = collection(firestore, "products");
    const docSnapshot = await getDoc(doc(firestore, `products/${id}`));
    const productsQuery = query(
      ref,
      orderBy("createdAt", "desc"),
      limit(8),
      startAfter(docSnapshot)
    );

    return (await getDocs(productsQuery)).docs.map(dataToJSON);
  } catch (e) {
    console.error("Error getting doc", e);
    throw e;
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const ref = doc(firestore, `products/${id}`);
    return dataToJSON(await getDoc(ref));
  } catch (e) {
    console.error("Error getting doc", e);
    throw e;
  }
};

export const getProductsByCategory = async (
  category: string[]
): Promise<Product[]> => {
  try {
    const ref = collection(firestore, "products");
    const productsQuery = query(
      ref,
      where("category", "array-contains-any", category),
      orderBy("createdAt", "desc"),
      limit(8)
    );

    return (await getDocs(productsQuery)).docs.map(dataToJSON);
  } catch (e) {
    console.error("Error getting doc", e);
    throw e;
  }
};

export const getMoreProductsByCategory = async (
  id: string,
  category: string[]
): Promise<Product[]> => {
  try {
    const ref = collection(firestore, "products");
    const docSnapshot = await getDoc(doc(firestore, `products/${id}`));
    const productsQuery = query(
      ref,
      where("category", "array-contains-any", category),
      orderBy("createdAt", "desc"),
      limit(8),
      startAfter(docSnapshot)
    );

    return (await getDocs(productsQuery)).docs.map(dataToJSON);
  } catch (e) {
    console.error("Error getting doc", e);
    throw e;
  }
};
