export const allowedOrigin = (event) => {
    const allowedOrigins = ["https://web.leafty.app", "https://www.leafty.app"];
    const origin = event.headers?.Origin || event.headers?.origin;

    const responseOrigin = allowedOrigins.includes(origin) ? origin : "https://web.leafty.app";
    return responseOrigin;
};