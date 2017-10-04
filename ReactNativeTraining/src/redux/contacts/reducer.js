export const contacts = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CONTACTS':
      return action.payload;
    default:
      return state;
  }
};
