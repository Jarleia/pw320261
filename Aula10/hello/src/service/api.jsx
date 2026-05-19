import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.11.24:3000/v1",
  timeout:10000,
  headers:{
    "Content-Type":"application/json",
    Accept:'application/json'
  }
});

export default api;