import {User} from "@chia/utils/types/user";

export const dataToJSON = (currentUser: any)  => {
    return {
        ...currentUser,
        uid: currentUser.uid,
        email: currentUser.email,
        name: currentUser.displayName,
        photoURL: currentUser.photoURL,
    } as User;
}
