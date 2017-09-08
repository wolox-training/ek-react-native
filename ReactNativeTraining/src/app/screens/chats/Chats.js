import React, { PropTypes } from 'react';
import { View } from 'react-native';

import ContactList from '../ContactList';
import NavButtons from '../NavButtons';

import styles from './Chats.style';

const Chats = props => (
  <View style={styles.container}>
    <NavButtons search />
    <ContactList data={props.chats} />
  </View>
);

Chats.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      message: PropTypes.string
    })
  )
};

export default Chats;
