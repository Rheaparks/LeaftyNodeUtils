import { allowedOrigin } from "./allowed-origin";

export const headerOptions = (event, cacheMaxAge) => {
    const origin = allowedOrigin(event);
    return {
        origin: origin,
        cacheMaxAge: cacheMaxAge ?? 3600 * 24
    };
};