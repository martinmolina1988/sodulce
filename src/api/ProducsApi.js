import Axios from "axios";
import * as FormData from 'form-data';
import { setTokenApi } from "./auth";
const API_HOST = "https://sodulce.herokuapp.com";

export async function agregoProducto(product) {
    console.log(product)
    try {
        const response = await Axios({
            url: `${API_HOST}/insertoProducto`,

            method: "POST",
            data: product
        })
        return response;
    } catch (e) {
        console.log(e)
    }

}
export async function buscoProducto(product) {
    try {
        const response = await Axios({
            url: `${API_HOST}/buscoProducto`,

            params: {
                producto: product
            }

        })
        return response;
    } catch (e) {
        console.log(e)
    }
}


export async function deleteImage(product) {
    console.log(product)
    try {
        const response = await Axios({
            url: `${API_HOST}/delete`,

            params: {
                _id: product
            }

        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function listaFotos(product) {
    console.log(product)
    try {
        const response = await Axios({
            url: `${API_HOST}/listafotos`,

            params: {
                producto: product
            }

        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function listaProductos() {
    try {
        const response = await Axios({
            url: `${API_HOST}/listaProductos`,



        })
        return response;
    } catch (e) {
        console.log(e)
    }

}
export async function insertoProducto(product) {
    try {
        const response = await Axios({
            url: `${API_HOST}/insertoProductos`,

            params: {
                producto: product
            }

        })
        return response;
    } catch (e) {
        console.log(e)
    }

}

export function capitalizarPalabra(palabra) {
    const result = palabra.replace(/\b\w/g, l => l.toUpperCase())
    return result
}

export async function updateInfoApi(data) {
    console.log(data)
    try {
        const response = await Axios({
            url: `${API_HOST}/editoProducto`,

            method: "POST",
            data: data
        })
        return response;
    } catch (e) {
        console.log(e)
    }
}

export async function uploadAvatarApi(file, img) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    console.log(file)
    let formData = new FormData();
    formData.append('file', file);

    formData.append('producto', img);

    Axios.post(`${API_HOST}/uploadimage`, formData, config)
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}
export async function editAvatarApi(file, img, id) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    let formData = new FormData();
    formData.append('file', file);

    formData.append('producto', img);
    formData.append('_id', id);

    Axios.post(`${API_HOST}/editimage`, formData, config)
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}
export async function addProduct(file, producto, description, precio) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    let formData = new FormData();
    formData.append('file', file);
    formData.append('producto', producto);
    formData.append('description', description);
    formData.append('precio', precio);



    Axios.post(`${API_HOST}/insertoProducto`, formData, config)
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

export async function deleteAll(product) {
    try {
        const response = await Axios({
            url: `${API_HOST}/deleteall`,

            params: {
                producto: product
            }

        })
        return response;
    } catch (e) {
        console.log(e)
    }
}

export async function ingresoAdmin(formData) {

    console.log(formData)
    const config = { headers: { 'Content-Type': 'application/json' } };




    await Axios.post(`${API_HOST}/signin`, formData, config)
        .then((response) => {
            setTokenApi(response.data.token);
        })
        .catch(error => {
            console.log(error);
        })
}

