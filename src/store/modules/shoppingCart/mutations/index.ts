import type { shoppingCartStateType } from "@chia/store/modules/shoppingCart/states";
import type {Product} from "@chia/utils/types/product";

export const addToCart = (state: shoppingCartStateType, payload: Product) => {
    state.count++;
    state.products.push(payload);
    state.total += payload.price;
}

export const removeFromCart = (state: shoppingCartStateType, payload: Product) => {
    state.count--;
    state.products = state.products.filter(product => product.id !== payload.id);
    state.total -= payload.price;
}
