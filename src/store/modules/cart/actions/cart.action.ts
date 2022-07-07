import type {Product} from "@chia/utils/types/product";

export const addProductToCartAction = (context: any, product: Product) => {
    const name = product.name;
    const price = product.price;
    const quantity = 1;

    context.commit('addProductToCart', {name, price, quantity});
}
