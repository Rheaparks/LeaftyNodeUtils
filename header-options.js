import { allowedOrigin } from "./allowed-origin.js";

export const headerOptionsForEvent = (event, cacheMaxAge) => {
    const origin = allowedOrigin(event);
    return {
        origin: origin,
        cacheMaxAge: cacheMaxAge ?? 3600 * 24
    };
};