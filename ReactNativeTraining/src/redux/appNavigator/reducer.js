export const messages = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};

export const groups = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_GROUPS':
      return action.payload;
    default:
      return state;
  }
};

export const contacts = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CONTACTS':
      return action.payload;
    default:
      return state;
  }
};
