import axios from "axios";

// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = `http://172.16.10.201:9000`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default axios;
