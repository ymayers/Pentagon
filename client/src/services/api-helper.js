import axios from "axios";

const baseURL = "http://localhost:3000";

// const baseURL = process.env.NODE_ENV === 'production'
// ? 'herokusitehere.com'
// : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseURL,
});

/**********AUTH*********/

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

/*******USER EDIT************/

export const updateProfileImg = async (id, userImgParams) => {
  const resp = await api.put(`/users/${id}`, { user: userImgParams })
  const updatedImg = resp.data

  return updatedImg
}

/*******EVENTS************/

export const getAllEvents = async () => {
  const resp = await api.get('/events');
  const events = resp.data;
  return events;
};

export const getOneEvent = async (id) => {
  const resp = await api.get(`/events/${id}`);
  const event = resp.data;
  console.log(event);
  return event;
};

/**********TICKETS************/

export const getUserTickets = async () => {
  const resp = await api.get(`/users_tickets_events`);
  const tickets = resp.data;
  return tickets;
};

export const getUserTicket = async (userId, ticketId) => {
  const resp = await api.get(`/users/${userId}/tickets/${ticketId}`);
  const ticket = resp.data;
  console.log(ticket);
  return ticket;
};

export const postUserTicket = async (ticketParams) => {
  const resp = await api.post(`/tickets/`, { ticket: ticketParams });
  const ticket = resp.data;
  console.log(ticket);
  return ticket;
};

export const deleteUserTicket = async (id) => {
  const resp = await api.delete(`/tickets/${id}`);
  return resp;
};

export const getQR = async (ticketId) => {
  const resp = await api.get(`/qrcode/${ticketId}`);
  const qr = resp.data;
  // console.log('QRRR-->',qr);
  return qr;
};

/**********CARDS************/

export const postUserCard = async (cardParams) => {
  const resp = await api.post(`/credit_cards/`, { credit_card: cardParams });
  const ticket = resp.data;
  console.log(ticket);
  return ticket;
};
