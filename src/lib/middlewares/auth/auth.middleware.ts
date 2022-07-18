import { getUser } from '@chia/lib/firebase/auth/services';

export const authMiddleware = async (request: RequestInit) => {
    const user = await getUser();
    if(!user) throw new Error('User not logged in');
    return {
        ...request.headers,
        'content-type': 'application/json',
        'Authorization': `Bearer ${user.accessToken}`
    }
}

export const getAuthCreditentials = async () => {
    const user = await getUser();
    if(!user) throw new Error('User not logged in');
    return {
        'content-type': 'application/json',
        'Authorization': `Bearer ${user.accessToken}`
    }
}
