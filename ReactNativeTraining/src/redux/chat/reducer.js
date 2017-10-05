export const chat = (state = [], action) => {
  switch (action.type) {
    case 'CHAT_SELECTED':
      return { receiverId: action.payload.id, groupId: null };
    case 'GROUP_SELECTED':
      return { receiverId: null, groupId: action.payload.id };
    case 'CONTACT_SELECTED':
      return { receiverId: action.payload.id, groupId: null };
    default:
      return state;
  }
};
