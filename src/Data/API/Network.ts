import axios from "axios";

const baseUrl = "http://127.0.0.1:6061";

type RequestType = "GET" | "POST" | "PATCH" | "DELETE";

export function Request<T>(path: string, token: string, type: RequestType, params?: any, body?: T){
    return new Promise((resolve, reject)=> (
        axios({
            method: type,
            url: `${ baseUrl }/${ path }`,
            params: params,
            data: body,
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        })
        .then(response => {
            if(response.status >= 200 && response.status <300){
                resolve(response.data);
            }else{
                reject();
            }
        })
    ))
}