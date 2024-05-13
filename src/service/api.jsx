import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/opinionManager/v1',
    timeout: 5000
})

export const commentPost = async (data) => {
    try {
        return await apiClient.post('/comment', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const commentPut = async (id, data) => {
    try {
        return await apiClient.put(`/comment/${id}`, data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const commentById = async (id) => {
    try {
        return await apiClient.get(`/comment/${id}`);
    } catch (e) {
        return {error: true,
        e
        }
    }
}

export const commentDelete = async (id) => {
    try {
        return await apiClient.delete(`/comment/${id}`);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const publicationPost = async (data) => {
    try {
        return await apiClient.post('/publication', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const publicationGet = async () => {
    try {
        return await apiClient.get('/publication')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const publicationPut = async (id, data) => {
    try {
        return await apiClient.put(`/publication/${id}`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


export const publicationDelete = async (id) => {
    try {
        return await apiClient.delete(`/publication/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}