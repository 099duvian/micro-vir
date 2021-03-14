import {basePath} from './cofig'

export function uploadImageApi(data) {
    const url = `${basePath}/upload`;
    console.log(data)
    const params ={
        method: "POST",
        body: FormData,
    };
    return fetch(url, params).then(response =>{
        return response.json();
    }).then(result =>{
        return console.log('Imagen guardada')
    })
}