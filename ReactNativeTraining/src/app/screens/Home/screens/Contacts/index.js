import { connect } from 'react-redux';

import Contacts from './layout';

const mapStateToProps = state => ({
  contacts: state.contacts.map(contact => ({
    id: contact.id,
    name: contact.username,
    avatar: contact.avatar
  }))
});

export default connect(mapStateToProps)(Contacts);
