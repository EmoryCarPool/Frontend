import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://0194-2600-1700-1c65-430-ecdc-7b3c-a5e9-131c.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 