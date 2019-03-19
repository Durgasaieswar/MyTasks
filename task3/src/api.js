import axios from 'axios'

const KEY = "737f6c33bbd342edbc117298a92e9579";

export default axios.create({
    baseURL : 'https://newsapi.org/v2',
    params:{
        apiKey: KEY
    }
});