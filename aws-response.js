const headersWithOptions = (headerOptions) => {
    return {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": headerOptions.origin,
        "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Cache-Control": `public max-age=${headerOptions.cacheMaxAge} immutable`
    };
};

export class AWSResponse {
    static success(responseObject, headerOptions) {
        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: headersWithOptions(headerOptions),
            body: JSON.stringify(responseObject)
        };
    }

    static failure(httpStatusCode, errorObject, headerOptions) {
        return {
            isBase64Encoded: false,
            statusCode: httpStatusCode,
            headers: headersWithOptions(headerOptions),
            body: JSON.stringify(errorObject)
        };
    }

    /**
     * 400 Bad Request error
    */
    static badRequest(message, headerOptions) {
        return {
            isBase64Encoded: false,
            statusCode: 400,
            headers: headersWithOptions(headerOptions),
            body: JSON.stringify({
                code: "BAD_REQUEST",
                message: message
            })
        };
    }

    /**
     * 500 Internal Server Error
     */
    static internalServerError(message, headerOptions) {
        return {
            isBase64Encoded: false,
            statusCode: 500,
            headers: headersWithOptions(headerOptions),
            body: JSON.stringify({
                code: "INTERNAL_SERVER_ERROR",
                message: message
            })
        };
    }

    /**
     * 302 Redirect
     */
    static redirect(location, headerOptions) {
        return {
            isBase64Encoded: false,
            statusCode: 302,
            headers: {
                ...headersWithOptions(headerOptions),
                "Location": location
            },
            body: ""
        };
    }
}