import axios from "axios";

export const axiosInstanace = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api",
  //   Send cookie every single request
  withCredentials: true,
});
