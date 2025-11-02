import API from "./axiosInstance";

export const registerUser = (userData) => API.post("/api/user/userregister", userData);
export const registerPartner = (partnerData) => API.post("/api/user/partnerregister", partnerData);

