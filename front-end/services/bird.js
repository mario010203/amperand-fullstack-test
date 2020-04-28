import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const birdAll = async () => {
  const res = await api.get("/bird");
  console.log("Answer from Server to Bird", res.data);
  return res.data;
};
