export const groups = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_GROUPS':
      return action.payload;
    default:
      return state;
  }
};
