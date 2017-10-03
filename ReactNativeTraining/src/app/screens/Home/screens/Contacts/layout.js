import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList';

const Contacts = props => <ContactList data={props.contacts} />;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  )
};

export default Contacts;
