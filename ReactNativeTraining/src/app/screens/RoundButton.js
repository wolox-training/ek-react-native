import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './RoundButton.style';

const RoundButton = props => (
  <TouchableOpacity onPrese={() => true}>
    <View style={styles.shadow}>{props.children}</View>
  </TouchableOpacity>
);

export default RoundButton;
