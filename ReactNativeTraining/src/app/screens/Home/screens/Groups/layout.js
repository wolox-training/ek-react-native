import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList';

const Groups = data => <ContactList data={data.groups} />;

Groups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  ),
  lastMessage: PropTypes.func
};

export default Groups;
