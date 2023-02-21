import axios from "axios";

export default axios.create({
    // free ngrok: update baseURL every 2 hours
    baseURL: 'http://ab0f-2600-1700-1c65-430-53-2b4f-b0a-1f07.ngrok.io'
    // baseURL: 'https://localhost:3000'

}) 