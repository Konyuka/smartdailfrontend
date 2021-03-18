import axios from "axios";

// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = `http://172.16.10.201:9000`;
// axios.defaults.baseURL = `http://10.15.1.5:4001`;
axios.defaults.baseURL = `http://172.16.10.204:4001`;
// axios.defaults.baseURL = `http://172.16.10.209:8080`;
// axios.defaults.baseURL = `http://172.16.2.10:9000`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default axios;
