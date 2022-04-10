/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import axios from "axios";

const api = axios.create({
    baseURL: process.env.AZURE_BASE_URL,
});

api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers["Ocp-Apim-Subscription-Key"] = `${process.env.AZURE_KEY}`;
        config.headers["Content-Type"] = "application/json";
    }

    return config;
});
export default api