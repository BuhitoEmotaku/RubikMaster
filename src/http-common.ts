import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://rubikmaster.ddns.net/apiRubikMaster",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
