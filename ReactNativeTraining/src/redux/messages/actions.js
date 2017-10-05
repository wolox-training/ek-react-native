import { sendMessage } from '../../services/services';

export const sendMessageToContact = (message, senderId, receiverId) => dispatch => {
  sendMessage({
    body: message,
    senderId,
    receiverId
  }).then(response => {
    dispatch({ type: 'SEND_MESSAGE', payload: response.data });
  });
};

export const sendMessageToGroup = (message, senderId, receiverId) => dispatch => {
  sendMessage({
    body: message,
    senderId,
    groupId: receiverId
  }).then(response => {
    dispatch({ type: 'SEND_MESSAGE', payload: response.data });
  });
};

export default sendMessageToContact;
