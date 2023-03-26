import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://8690-71-204-84-86.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 