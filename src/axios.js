import axios from "axios";

const instance = axios.create({
    baseURL: '...' // cloud function url
})

export default instance