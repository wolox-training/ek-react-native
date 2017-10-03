import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { chatsBetweenTwoContacts } from '../../../selectors';

import Chat from './layout';

const mapStateToProps = state => ({
  messages: chatsBetweenTwoContacts(state),
  currentUserId: 1,
  contact: state.chat
});

class ChatContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.username
  });

  render() {
    const { messages, currentUserId } = this.props;
    return <Chat messages={messages} currentUserId={currentUserId} />;
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
  currentUserId: PropTypes.number
};

export default connect(mapStateToProps)(ChatContainer);
