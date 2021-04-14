import axios from 'axios';
const KEY = 'AIzaSyDNnLDKghvwknqExQJbMjUL87LlGvPTl2M';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet,contentDetails',
        key: KEY,
        maxResults: 50,
    }
})












