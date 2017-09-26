import { connect } from 'react-redux';

import Chats from './layout';

const mapStateToProps = state => ({
  messages: state.messages.filter(message => message.receiverId !== undefined),
  contacts: state.contacts.filter(
    contact =>
      state.messages.some(message => message.senderId === contact.id || message.receiverId === contact.id) &&
      contact.id !== 1
  ),
  currentUserId: 1
});

export default connect(mapStateToProps)(Chats);
