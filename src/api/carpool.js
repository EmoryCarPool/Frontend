import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://911d-2600-1700-1c65-430-f0b8-2097-6355-190e.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 