import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { contactsFromCurrentUser } from '../selectors';

import Contacts from './layout';

const mapStateToProps = state => ({
  contacts: contactsFromCurrentUser(state)
});

const ContactsContainer = ({ contacts }) => <Contacts contacts={contacts} />;

ContactsContainer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  )
};

export default connect(mapStateToProps)(ContactsContainer);
