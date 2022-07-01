import type { Product } from "@chia/src/utils/types/product";

export type productStateType = {
    products: {
        isLoading: boolean,
        isError: boolean,
        error: string | null | undefined | object,
        data: Product[]
    }
}

export const productInitState = {
    products: {
        isLoading: false,
        isError: false,
        error: null,
        data: [] as Product[],
    }
}
