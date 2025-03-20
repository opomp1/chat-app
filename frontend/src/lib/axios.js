import axios from "axios";

export const axiosInstanace = axios.create({
  baseURL: "http://localhost:5001/api",
  //   Send cookie every single request
  withCredentials: true,
});
