export const chatSelected = id => dispatch => {
  dispatch({ type: 'CHAT_SELECTED', payload: id });
};

export default chatSelected;
