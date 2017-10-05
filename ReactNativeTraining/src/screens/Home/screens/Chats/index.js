import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { chatsFromCurrentUser } from '../../../../selectors';
import { chatSelected } from '../../../../redux/chat/actions';

import Chats from './layout';

const mapStateToProps = state => ({
  chats: chatsFromCurrentUser(state)
});

class ChatsContainer extends React.Component {
  handleOnClick = contact => {
    this.props.dispatch(chatSelected(contact));
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Chat',
        params: {
          username: contact.name
        }
      })
    );
  };

  render() {
    return <Chats chats={this.props.chats} onClick={this.handleOnClick} />;
  }
}

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
