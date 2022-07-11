import type { User } from "@chia/utils/types/user";
import type { AuthState } from "../states";

export const beginLogin = (state: AuthState) => {
    state.isLoading = true;
    state.isError = false;
    state.error = "";
}

export const loginSuccess = (state: AuthState, user: User) => {
    state.isLoading = false;
    state.isAuthenticated = true;
    state.user = user;
}

export const loginError = (state: AuthState, error: string) => {
    state.isLoading = false;
    state.isError = true;
    state.error = error;
}

export const logout = (state: AuthState) => {
    state.isAuthenticated = false;
    state.user = null;
}
