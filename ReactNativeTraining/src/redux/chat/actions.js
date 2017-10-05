export const chatSelected = contact => dispatch => {
  dispatch({ type: 'CHAT_SELECTED', payload: contact });
};

export default chatSelected;
