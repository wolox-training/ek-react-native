import React, { PropTypes } from 'react';
import { FlatList, View } from 'react-native';

import Message from '../Message/index';

import styles from './styles';

class Conversation extends React.Component {
  renderItem = item => <Message message={item} currentUserId={this.props.currentUserId} />;

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

Conversation.propTypes = {
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

export default Conversation;
