import axios from  'axios';

const instance = axios.create({
    baseURL: 'https://sweetstudio-95ff3.firebaseio.com/',
    responseType: "json",

});

export default instance;