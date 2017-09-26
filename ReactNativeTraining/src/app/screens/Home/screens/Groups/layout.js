import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList';

const Groups = props => {
  const data = props.groups.map(group => ({
    id: group.id,
    name: group.name,
    message: props.messages.filter(message => message.groupId === group.id).pop().body
  }));
  return <ContactList data={data} />;
};

Groups.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.number,
      body: PropTypes.string,
      senderId: PropTypes.number,
      receiverId: PropTypes.number
    })
  ),
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  )
};

export default Groups;
