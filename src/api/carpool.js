import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://58f0-2600-1700-1c65-430-9dad-a7cf-eff5-7445.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 