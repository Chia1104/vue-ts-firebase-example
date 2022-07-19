import { getUser } from '@chia/lib/firebase/auth/services';
import { onIdTokenChanged } from "firebase/auth";
import {auth} from "@chia/lib/firebase/config";

export const authMiddleware = (request: RequestInit) => {
    const user = getUser();
    return {
        ...request,
        headers: {
            ...request.headers,
            'content-type': 'application/json',
            'Authorization': `Bearer ${user?.accessToken}`
        }
    }
}

// @ts-ignore
export const refreshTokenMiddleware = (response: Response<unknown>) => {
    if (response.errors) {
        const error = response.errors[0];
        if (error.extensions.code === 'auth/user-token-expired') {
            onIdTokenChanged(auth, (user) => {
                if (user) {
                    const token = user.getIdToken();
                    console.log('refresh token', token);
                }
            })
        }
    }
}
