import axios from "axios";

export const api = axios.create({
  baseURL: "https://brownten.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
