import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const limeAll = async () => {
  const res = await api.get("/lime");
  console.log("Answer from Server to Lime", res.data.data.attributes.vehicles);
  return res.data.data.attributes.vehicles;
};
