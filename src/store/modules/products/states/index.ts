import type { Product } from "@chia/utils/types/product";

export type productStateType = {
    products: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
        error: string | null | undefined | object,
        data: Product[]
    },
    product: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
        error: string | null | undefined | object,
        data: Product
    }
}

export const productsInitState = {
    products: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        data: [] as Product[],
    },
    product: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        data: {} as Product,
    }
}
