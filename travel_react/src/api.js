import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5254/api/' });

export const getTourists = () => API.get("/Tourists");
export const getTourist = (id) => API.get(`/Tourists/${id}`);
export const createTourist = (data) => API.post("/Tourists", data);
export const updateTourist = (id, data) => API.put(`/Tourists/${id}`, data);
export const deleteTourist = (id) => API.delete(`/Tourists/${id}`);

export const getDestinations =() => API.get("/Destination");
export const getDestination=(id)=>API.get(`/Destination/${id}`);
export const createDestination=(data)=>API.post("/Destionation",data);
export const updateDestination=(id, data)=>API.put(`/Destination/${id}`,data);
export const deleteDestination=(id)=>API.delete(`/Destination/${id}`);

export const getBookings =() => API.get("/Booking");
export const getBooking=(id)=>API.get(`/Booking/${id}`);
export const createBookings=(data)=>API.post("/Booking",data);
export const updateBookings=(id, data)=>API.put(`/Booking/${id}`,data);
export const deleteBookings=(id)=>API.delete(`/Booking/${id}`);