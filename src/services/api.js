import axios from "axios";

const api = axios.create({
 baseURL: "https://api.github.com",
//  baseURL: "https://www.postman-echo.com",
});

export default api;