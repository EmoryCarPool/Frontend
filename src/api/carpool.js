import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://e894-2600-1700-1c65-430-f883-c509-28fe-5744.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 