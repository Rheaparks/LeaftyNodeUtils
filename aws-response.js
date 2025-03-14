import { allowedOrigin } from "./allowed-origin.js";

const headersWithOptions = (event, cacheControl) => {
    const origin = allowedOrigin(event);
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    if (cacheControl != null) {
        headers["Cache-Control"] = cacheControl;
    }
    return headers;
};

export class AWSResponse {
    static success(responseObject, event, cacheControl) {
        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: headersWithOptions(event, cacheControl),
            body: JSON.stringify(responseObject)
        };
    }

    static failure(httpStatusCode, errorObject, event, cacheControl) {
        return {
            isBase64Encoded: false,
            statusCode: httpStatusCode,
            headers: headersWithOptions(event, cacheControl),
            body: JSON.stringify(errorObject)
        };
    }

    /**
     * 400 Bad Request error
    */
    static badRequest(message, event) {
        return {
            isBase64Encoded: false,
            statusCode: 400,
            headers: headersWithOptions(event, "public, max-age=60, must-revalidate"),
            body: JSON.stringify({
                code: "BAD_REQUEST",
                message: message
            })
        };
    }

    /**
     * 500 Internal Server Error
     */
    static internalServerError(message, event) {
        return {
            isBase64Encoded: false,
            statusCode: 500,
            headers: headersWithOptions(event, "no-store"),
            body: JSON.stringify({
                code: "INTERNAL_SERVER_ERROR",
                message: message
            })
        };
    }

    /**
     * 302 Redirect
     */
    static redirect(location, event, cacheControl) {
        return {
            isBase64Encoded: false,
            statusCode: 302,
            headers: {
                ...headersWithOptions(event, cacheControl),
                "Location": location
            },
            body: ""
        };
    }
}