export const contactSelected = id => dispatch => {
  dispatch({ type: 'CONTACT_SELECTED', payload: id });
};

export default contactSelected;
