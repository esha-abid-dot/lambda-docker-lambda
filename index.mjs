export const handler = async (event) => {
    // Method nikal lo (HTTP API ke liye yeh property hoti hai)
    const method = event.requestContext.http.method;

    if (method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "You called a GET request!"
            }),
        };
    } 
    else if (method === "POST") {
        // POST body parse kar lo
        const data = JSON.parse(event.body || "{}");

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "You called a POST request!",
                yourData: data
            }),
        };
    } 
    else {
        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Method Not Allowed"
            }),
        };
    }
};

