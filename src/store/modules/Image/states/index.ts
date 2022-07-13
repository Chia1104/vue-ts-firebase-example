export type ImageState = {
    banner: {
        isLoading: boolean;
        isError: boolean;
        isSuccess: boolean;
        error: string;
        listUrl: string[];
    }
}

export const imageInitState: ImageState = {
    banner: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        error: '',
        listUrl: [],
    }
}
