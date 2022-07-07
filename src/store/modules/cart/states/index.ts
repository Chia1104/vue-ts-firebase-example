import type {Cart} from "@chia/utils/types/cart";

export type cartStateType = {
    cart: Cart[]
}

export const cartInitState = {
    cart: [
        {
            productName: "",
            productPrice: 0,
            productQuantity: 0,
            productId: ""
        }
    ]
}
