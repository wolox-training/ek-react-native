import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Cross from '../Cross';
import { DARK_GREY } from '../../../constants';

import styles from './styles.js';

const Item = ({ item, onPress, onRemove }) =>
  <View style={[styles.container, item.checked && styles.checked]}>
    <Text>{item.name}</Text>
    <View style={styles.buttonsContainer}>
      <CheckBox
        containerStyle={styles.checkbox}
        checked={item.checked}
        onPress={onPress}
        checkedIcon='square'
        checkedColor={DARK_GREY}
      />
      <Cross onPress={onRemove} checked={item.checked}/>
    </View>
  </View>;

Item.defaultProps = {
 item: {
   name: '',
   checked: false
 }
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    checked: PropTypes.bool
  }),
  onPress: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Item;
