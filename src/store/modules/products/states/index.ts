import type { Product } from "@chia/utils/types/product";

export type productStateType = {
    products: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
        error: string | null | undefined | object,
        data: Product[],
        hasMore: boolean
    },
    product: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
        error: string | null | undefined | object,
        data: Product
    },
    categoryProducts: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
        error: string | null | undefined | object,
        data: Product[],
        hasMore: boolean
    }
}

export const productsInitState = {
    products: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        data: [] as Product[],
        hasMore: true
    },
    product: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        data: {} as Product
    },
    categoryProducts: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        data: [] as Product[],
        hasMore: true
    }
}
