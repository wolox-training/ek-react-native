import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { chatsFromCurrentUser } from '../selectors';

import Chats from './layout';

const mapStateToProps = state => ({
  chats: chatsFromCurrentUser(state)
});

const ChatsContainer = ({ chats }) => <Chats chats={chats} />;

ChatsContainer.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      message: PropTypes.string
    })
  )
};

export default connect(mapStateToProps)(ChatsContainer);
