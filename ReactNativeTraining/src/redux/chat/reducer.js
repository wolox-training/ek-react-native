export const chat = (state = [], action) => {
  switch (action.type) {
    case 'CHAT_SELECTED':
      return { senderId: action.payload, groupId: null };
    case 'GROUP_SELECTED':
      return { groupId: action.payload, senderId: null };
    case 'CONTACT_SELECTED':
      return { senderId: action.payload, groupId: null };
    default:
      return state;
  }
};
