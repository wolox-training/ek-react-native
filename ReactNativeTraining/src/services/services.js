import api from '../config/api';

export const contacts = async () => api.get('users');

export const groups = async id => api.get(`user/${id}/groups`);

export const messages = async () => api.get(`/messages`);

export const senderMessages = async id => api.get(`/messages?senderId=${id}`);

export const receiverMessages = async id => api.get(`/messages?receiverId=${id}`);
