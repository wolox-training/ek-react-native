import React, { PropTypes } from 'react';
import { Button, FlatList, TextInput, View } from 'react-native';

import Message from '../Message/index';

import styles from './styles';

let message = '';

class Conversation extends React.Component {
  handlePress = () => this.props.onClick(message);

  renderItem = item => <Message message={item} currentUserId={this.props.currentUserId} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
        <TextInput onChangeText={text => (message = text)} />
        <Button onPress={this.handlePress} title="SEND" />
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
  currentUserId: PropTypes.number,
  onClick: PropTypes.func
};

export default Conversation;
