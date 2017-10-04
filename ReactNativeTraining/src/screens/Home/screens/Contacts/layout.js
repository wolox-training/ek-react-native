import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList/index';

const Contacts = props => <ContactList data={props.contacts} onClick={props.onClick} />;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  ),
  onClick: PropTypes.func
};

export default Contacts;
