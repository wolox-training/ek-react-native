import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList';

class Chats extends React.Component {
  isAMessageBetween = (userId, contactId, message) =>
    (message.senderId === userId && message.receiverId === contactId) ||
    (message.receiverId === userId && message.senderId === contactId);

  lastMessage = (userId, contactId) =>
    this.props.messages.filter(message => this.isAMessageBetween(userId, contactId, message)).pop().body;

  render() {
    const data = this.props.contacts.map(contact => ({
      id: contact.id,
      name: contact.username,
      avatar: contact.avatar,
      message: this.lastMessage(this.props.currentUserId, contact.id)
    }));

    return <ContactList data={data} />;
  }
}

Chats.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.number,
      body: PropTypes.string,
      senderId: PropTypes.number,
      receiverId: PropTypes.number
    })
  ),
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  ),
  currentUserId: PropTypes.number
};

export default Chats;
