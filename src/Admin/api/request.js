import axios from "axios";
import Cookies from "js-cookie";

// const baseUrl = "https://70a7-118-70-132-104.ngrok-free.app";
const baseUrl = "http://localhost:8080";
const login_path = "/api/auth/login";
const register_path = "/api/auth/register";

axios.interceptors.request.use((req) => {
  const jwt = Cookies.get("jwt");
  const newUrl = baseUrl + req.url;
  const Authorization = (req.url === login_path || req.url === register_path) ? undefined : `Bearer ${jwt}`;
  console.log(req.url === login_path || req.url === register_path);
  return {
    ...req,
    url: newUrl,
    headers: {
      ...req.headers,
      Authorization,
      "ngrok-skip-browser-warning": "1",
    },
  };
});

axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
