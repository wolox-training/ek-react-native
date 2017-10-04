import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList';

const Groups = data => <ContactList data={data.groups} onClick={data.onClick} />;

Groups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  ),
  lastMessage: PropTypes.func,
  onClick: PropTypes.func
};

export default Groups;
