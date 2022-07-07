import type {Product} from "@chia/utils/types/product";

export const addToCartAction = async (context: any, product: Product) => {
    context.commit('addToCart', product);
}

export const removeFromCartAction = async (context: any, product: Product) => {
    context.commit('removeFromCart', product);
}

export const clearCartAction = async (context: any) => {
    localStorage.clear();
    context.commit('clearCart');
}

export const getCartProductsAction = async (context: any) => {
    const localStorageProducts = await localStorage.getItem('products');
    if (localStorageProducts) {
        const products = await JSON.parse(localStorageProducts) as Product[];
        context.commit('getCartProducts', products);
    }
}
