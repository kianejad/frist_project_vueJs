import axios from 'axios';
import {ACCESS_TOKEN, BASE_URL, IS_LOGGED_IN} from '@/configs/variables.config';
import {PATHS} from '@/configs/routes.config';

let canRefresh = true;

class HttpService {
    constructor() {
        axios.defaults.baseURL = BASE_URL;

        axios.interceptors.request.use(config => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axios.interceptors.response.use(response => {
            canRefresh = true;
            return response;
        }, async error => {
            if (!error.response) return Promise.reject(error);

            const originalRequest = error.config;
            console.log('error : ', originalRequest);
            if (error.response.status === 401) {
                if (canRefresh) {
                    canRefresh = false;
                    try {
                        return new Promise((resolve, reject) => {
                            axios
                                .request(originalRequest)
                                .then(res => {
                                    console.log('res originalRequest : ', res);
                                    resolve(res);
                                })
                                .catch(e => {
                                    reject(e);
                                });
                        });
                    } catch (e) {
                        console.log('error refresh token: ', error.response);
                        localStorage.setItem(IS_LOGGED_IN, false.toString());
                        history.push(PATHS.SIGN_IN);
                        return Promise.reject(error);
                        // }
                    }
                }
            } else {
                toast.error(errorMap[error.response.status]);
                return Promise.reject(error);
            }
        });
    }

    get(url, config) {
        return axios.get(url, config);
    }

    post(url, data, config) {
        return axios.post(url, data, config);
    }

    put(url, data, config) {
        return axios.put(url, data, config);
    }

    patch(url, data, config) {
        return axios.patch(url, data, config);
    }

    delete(url, config) {
        return axios.delete(url, config);
    }
}

export default new HttpService();
