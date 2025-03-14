const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://web.leafty.app,https://www.leafty.app",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

export class AWSResponse {
    static success(responseObject) {
        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(responseObject)
        };
    }

    static failure(httpStatusCode, errorObject) {
        return {
            isBase64Encoded: false,
            statusCode: httpStatusCode,
            headers: headers,
            body: JSON.stringify(errorObject)
        };
    }

    /**
     * 400 Bad Request error
    */
    static badRequest(message) {
        return {
            isBase64Encoded: false,
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                code: "BAD_REQUEST",
                message: message
            })
        };
    }

    /**
     * 500 Internal Server Error
     */
    static internalServerError(message) {
        return {
            isBase64Encoded: false,
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({
                code: "INTERNAL_SERVER_ERROR",
                message: message
            })
        };
    }

    /**
     * 302 Redirect
     */
    static redirect(location) {
        return {
            isBase64Encoded: false,
            statusCode: 302,
            headers: {
                ...headers,
                "Location": location
            },
            body: ""
        };
    }
}