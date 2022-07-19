import { getUser, refreshToken } from '@chia/lib/firebase/auth/services';

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
    console.log('response', response);
    if (response.errors) {
        const error = response.errors[0];
        if (error.extensions.code === 'invalid-jwt') refreshToken().then(token => console.log('refreshToken', token))
    }
}
