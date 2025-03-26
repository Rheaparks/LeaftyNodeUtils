export const allowedOrigin = (event) => {
    const allowedOrigins = ["https://web.leafty.app", "https://www.leafty.app"];

    if (event == null) {
        return allowedOrigins[0];
    }

    const origin = event.headers?.Origin || event.headers?.origin;

    const responseOrigin = allowedOrigins.includes(origin) ? origin : "https://web.leafty.app";
    return responseOrigin;
};