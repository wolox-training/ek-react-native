export const messages = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MESSAGES':
      return action.payload;
    case 'SEND_MESSAGE':
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};
