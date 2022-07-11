import { getUser, login, register, logout } from "@chia/lib/firebase/auth/services";

export const getUserAction = (context: any) => {
    context.commit('beginLogin')
    try {
        const user = getUser();
        user ? context.commit('loginSuccess', user) : context.commit('loginError', 'User not found');
    } catch (error) {
        context.commit('loginError', error);
    }
}

export const loginAction = async (context: any, { email, password }: { email: string, password: string }) => {
    context.commit('beginLogin')
    try {
        const user = await login(email, password);
        user ? context.commit('loginSuccess', user) : context.commit('loginError', 'User not found');
    } catch (error) {
        context.commit('loginError', error);
    }
}

export const registerAction = async (context: any, { email, password, c_password }: { email: string, password: string, c_password: string }) => {
    if (password !== c_password) return;
    context.commit('beginLogin')
    try {
        const user = await register(email, password, c_password);
        user ? context.commit('loginSuccess', user) : context.commit('loginError', 'User not found');
    } catch (error) {
        context.commit('loginError', error);
    }
}

export const logoutAction = async (context: any) => {
    try {
        logout().then(() => context.commit('logout'))
    } catch (error) {
        context.commit('loginError', error);
    }
}
