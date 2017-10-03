import React, { PropTypes } from 'react';
import { FlatList, View } from 'react-native';

import Message from '../../components/Message/index';

import styles from './styles';

class Chat extends React.Component {
  renderItem = item => (
    <Message message={item} currentUserId={this.props.currentUserId} contact={this.props.contact} />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      message: PropTypes.string
    })
  ),
  currentUserId: PropTypes.number,
  contact: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    avatar: PropTypes.string
  })
};

export default Chat;
