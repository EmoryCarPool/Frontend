import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://58fe-2600-1700-1c65-430-c14-ac34-9639-ce46.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 
