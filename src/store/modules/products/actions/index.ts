import { getProducts } from "@chia/src/firebase/products/services/products.services";

export const getProductsAction = async (context: any) => {
    context.commit('beginGetProducts');
    try {
        const products = await getProducts();
        if (products) context.commit('successGetProducts', products);
        else context.commit('failGetProducts', 'Error getting products');
    } catch (e) {
        context.commit('failGetProducts', e);
    }
}
