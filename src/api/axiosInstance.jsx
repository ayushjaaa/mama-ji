import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // dynamic for dev/prod
  withCredentials: true, // required for cookies (refresh token)
});

export default API;
