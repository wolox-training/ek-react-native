import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { messagesBetweenTwoContacts, groupMessages } from '../../selectors';
import { currentUserId } from '../../utils/constants';

import Chat from './layout';

const mapStateToProps = state => ({
  messages: state.chat.senderId ? messagesBetweenTwoContacts(state) : groupMessages(state),
  userId: currentUserId
});

class ChatContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.username
  });

  render() {
    const { messages, userId } = this.props;
    return <Chat messages={messages} currentUserId={userId} />;
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
  userId: PropTypes.number
};

export default connect(mapStateToProps)(ChatContainer);
