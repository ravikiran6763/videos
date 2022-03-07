import axios from 'axios';
const KEY = 'AIzaSyBu0NKf6tMfeLGS21m0_76opqt-zigVaAk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
