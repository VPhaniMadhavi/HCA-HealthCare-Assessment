import axios from 'axios';
const KEY = 'please_input_your_api_developer_key_here';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet,contentDetails',
        key: KEY,
        maxResults: 50,
    }
})












