export const chat = (state = [], action) => {
  switch (action.type) {
    case 'CHAT_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
