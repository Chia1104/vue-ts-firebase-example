import type { User } from "@chia/utils/types/user";

export type AuthState = {
    isAuthenticated: boolean;
    isLoading: boolean;
    isError: boolean;
    error: string;
    user: User | null;
}

export const authInitState = {
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    error: "",
    user: null
} as AuthState;
