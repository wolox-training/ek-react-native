import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Message = props => {
  const isSender = props.currentUserId === props.message.senderId;
  return (
    <View style={[styles.container, isSender ? styles.senderStyle : styles.receiverStyle]}>
      <Text style={[styles.text, isSender ? styles.senderBackgroundColor : styles.receiverBackgroundColor]}>
        {props.message.body}
      </Text>
    </View>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    senderId: PropTypes.number,
    receiverId: PropTypes.number
  }),
  currentUserId: PropTypes.number
};

export default Message;
