import axios from "axios";

const api = axios.create({
  baseURL: "https://critter-prayer-release.ngrok-free.dev/v1",
  timeout:10000,
  headers:{
    "Content-Type":"application/json",
    Accept:'application/json',
      "ngrok-skip-browser-warning": "1"
  }
});

export default api;