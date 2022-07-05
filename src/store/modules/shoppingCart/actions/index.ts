import type {Product} from "@chia/utils/types/product";

export const addToCartAction = (context: any, product: Product) => {
    context.commit('addToCart', product);
}

export const removeFromCartAction = (context: any, product: Product) => {
    context.commit('removeFromCart', product);
}
