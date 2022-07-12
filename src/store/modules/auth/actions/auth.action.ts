import { getUser, login, register, logout, updateProfile } from "@chia/lib/firebase/auth/services";

export const getUserAction = (context: any) => {
    context.commit('beginLogin')
    try {
        const user = getUser();
        user ? context.commit('loginSuccess', user) : context.commit('loginError', 'User not found');
    } catch (e: any) {
        context.commit('loginError', e.code);
    }
}

export const loginAction = async (context: any, { email, password }: { email: string, password: string }) => {
    context.commit('beginLogin')
    try {
        const user = await login(email, password);
        user ? context.commit('loginSuccess', user) : context.commit('loginError', 'User not found');
    } catch (e: any) {
        context.commit('loginError', e.code);
    }
}

export const registerAction = async (context: any, { email, password, c_password }: { email: string, password: string, c_password: string }) => {
    if (password !== c_password) return;
    context.commit('beginLogin')
    try {
        const user = await register(email, password, c_password);
        user ? context.commit('loginSuccess', user) : context.commit('loginError', 'User not found');
    } catch (e: any) {
        context.commit('loginError', e.code);
    }
}

export const logoutAction = async (context: any) => {
    try {
        logout().then(() => context.commit('logout'))
    } catch (e: any) {
        context.commit('loginError', e.code);
    }
}

export const updateProfileAction = async (context: any, { displayName, photoURL }: { displayName?: string, photoURL?: string }) => {
    try {
        updateProfile(displayName, photoURL).then(() => context.commit('loginSuccess', getUser()))
    } catch (e: any) {
        context.commit('loginError', e.code);
    }
}
