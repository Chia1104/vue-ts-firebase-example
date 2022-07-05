import type {Product} from "@chia/utils/types/product";

export type shoppingCartStateType = {
    count: number,
    products: Product[]
    total: number
}

export const shoppingCartInitState = {
    count: 0,
    products: [],
    total: 0
}
