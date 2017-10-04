import { groups, contacts, messages } from '../../services/services';

const loadData = id => dispatch => {
  messages().then(response => dispatch({ type: 'LOAD_MESSAGES', payload: response.data }));
  groups(id).then(response => dispatch({ type: 'LOAD_GROUPS', payload: response.data }));
  contacts().then(response => dispatch({ type: 'LOAD_CONTACTS', payload: response.data }));
};

export default loadData;
