import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile as firebaseUpdateProfile, onAuthStateChanged } from "firebase/auth";
import { dataToJSON } from "@chia/lib/firebase/auth/repositories";
import {auth} from "../../config";
import type { User } from "@chia/utils/types/user";

export const login = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return dataToJSON(userCredential.user);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getUser = (): User | null => {
    try {
        return dataToJSON(auth.currentUser);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const register = async (email: string, password: string, c_password: string) => {
    if(password !== c_password) return null;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return dataToJSON(userCredential.user);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const logout = async () => {
    try {
        return await signOut(auth);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const updateProfile = async (displayName?: string, photoURL?: string) => {
    try {
        const user = auth.currentUser;
        if(!user) return null;
        return firebaseUpdateProfile(user, {displayName, photoURL});
    } catch (error) {
        console.error(error);
        return null;
    }
}
