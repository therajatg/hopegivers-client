import axios from "axios";
const BASE_URL = "https://hopegivers-server.vercel.app";

export default axios.create({
  baseURL: BASE_URL,
});
