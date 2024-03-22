import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:5000'

  baseURL: import.meta.env.VITE_APP_FETCHING_API
  
});

export default instance;
