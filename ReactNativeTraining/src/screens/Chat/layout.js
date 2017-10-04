import React, { PropTypes } from 'react';

import Conversation from '../components/Conversation/index';

const Chat = data => <Conversation messages={data.messages} currentUserId={data.currentUserId} />;

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      message: PropTypes.string
    })
  ),
  currentUserId: PropTypes.number
};

export default Chat;
