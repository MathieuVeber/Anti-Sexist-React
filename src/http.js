/* Code from https://www.carlrippon.com/fetch-with-async-await-and-typescript/
© Carl Rippon
*/
export async function http(request) {
    const response = await fetch(request);
    try {
        // may error if there is no body
        response.parsedBody = await response.json();
    }
    catch (ex) { }
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}
export async function get(path, args = { method: "get" }) {
    return await http(new Request(path, args));
}
;
export async function post(path, body, args = { method: "post", body: JSON.stringify(body) }) {
    return await http(new Request(path, args));
}
;
export async function put(path, body, args = { method: "put", body: JSON.stringify(body) }) {
    return await http(new Request(path, args));
}
;