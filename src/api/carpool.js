import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://5049-170-140-104-119.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 