export default class AWSResponse {
    static success(responseObject) {
        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(responseObject)
        };
    }

    static failure(httpStatusCode, errorObject) {
        return {
            isBase64Encoded: false,
            statusCode: httpStatusCode,
            headers: { "Content-Type": "application/json" },
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
            headers: { "Content-Type": "application/json" },
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: "INTERNAL_SERVER_ERROR",
                message: message
            })
        };
    }
}