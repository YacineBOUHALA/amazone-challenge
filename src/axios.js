import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-94b7e/us-central1/api' // cloud function url
})

export default instance