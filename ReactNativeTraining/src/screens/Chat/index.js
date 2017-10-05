import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { messagesBetweenTwoContacts, groupMessages } from '../../selectors';
import { currentUserId } from '../../utils/constants';
import { sendMessageToContact, sendMessageToGroup } from '../../redux/messages/actions';

import Chat from './layout';

const mapStateToProps = state => ({
  messages: state.chat.receiverId ? messagesBetweenTwoContacts(state) : groupMessages(state),
  userId: currentUserId,
  chat: state.chat
});

class ChatContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.username
  });

  handleOnClick = message => {
    this.props.chat.receiverId
      ? this.props.dispatch(sendMessageToContact(message, this.props.userId, this.props.chat.receiverId))
      : this.props.dispatch(sendMessageToGroup(message, this.props.userId, this.props.chat.groupId));
  };

  render() {
    const { messages, userId } = this.props;
    return <Chat messages={messages} currentUserId={userId} onClick={this.handleOnClick} />;
  }
}

ChatContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      senderId: PropTypes.number
    })
  ),
  userId: PropTypes.number,
  chat: PropTypes.shape({
    receiverId: PropTypes.number,
    groupId: PropTypes.number
  })
};

export default connect(mapStateToProps)(ChatContainer);
