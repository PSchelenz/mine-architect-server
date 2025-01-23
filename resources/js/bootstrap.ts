import "bootstrap";

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true;

window.axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 419) {
      await window.axios.get("/sanctum/csrf-cookie");
      return window.axios(error.config);
    }
    return Promise.reject(error);
  }
);
