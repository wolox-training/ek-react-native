export const messages = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};
