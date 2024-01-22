import { verify } from 'jsonwebtoken';

export const isTokenExpired = (token) => {
    const secret = process.env.JWT_SECRET || "my-secret-key";
    try {
        const decodedToken = verify(token, secret);
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
        return (decodedToken.exp < currentTime);
    } catch (error) {
        console.error('Token validation error:', error);
        return true; // Treat any error as an expired token
    }
};
