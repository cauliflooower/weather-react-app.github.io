import axios from "axios";

const api = axios.create({
    // @ts-ignore:
    baseURL: 'https://api.openweathermap.org/data/2.5',
})

api.interceptors.request.use(config => {
    // @ts-ignore:
    config.url = config.url + '&units=metric&appid=f9f247630b7dd04e91eec2bd0dcc5af9';
    return config;
})

export default api;