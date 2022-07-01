import {query, orderBy, limit, getDocs, addDoc, collection} from 'firebase/firestore';
import { firestore } from '../../config'
import type { Product } from "@chia/src/utils/types/product";
import { dataToJSON } from "../repositories";

export const addProduct = async(product: Product) => {
    try {
        return await addDoc(collection(firestore, 'products'), product);
    }
    catch (e) {
        console.error('Error adding doc', e)
        throw e;
    }
}

export const getProducts = async(): Promise<Product[]> => {
    try {
        const ref = collection(firestore, 'products');
        const productsQuery = query(
            ref,
            orderBy('createdAt', 'desc'),
            limit(10),
        )

        return (await getDocs(productsQuery)).docs.map(dataToJSON);
    }
    catch (e) {
        console.error('Error getting doc', e)
        throw e;
    }
}
