import axios from "axios";

axios.defaults.baseURL = `http://172.16.10.208:8080`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default axios;
