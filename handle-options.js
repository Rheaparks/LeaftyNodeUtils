import { allowedOrigin } from "./allowed-origin.js";

export function handleOptions(event) {
    if (event.httpMethod === 'OPTIONS') {
        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': allowedOrigin(event),
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token'
            }
        };
    }
    return null;
};