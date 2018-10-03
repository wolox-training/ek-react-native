import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';

import { TEXT_PLACEHOLDER, BUTTON_LABEL } from './strings.js';
import { RED } from '../../../constants';
import Item from '../../components/Item';
import styles from './styles.js';

const TodoList = ({
  items,
  newItem,
  onChangeText,
  onCreateItem,
  onItemPress,
  onItemRemove,
  cleanItems
}) => {
  const renderItem = ({ item, index }) =>
    <Item
      item={item}
      onPress={() => onItemPress(index)}
      onRemove={() => onItemRemove(index)}
    />

  const keyExtractor = (_, index) => index.toString();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newItem}
        onBlur={onCreateItem}
        placeholder={TEXT_PLACEHOLDER}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <TouchableOpacity onPress={cleanItems}>
        <Text style={styles.button}>{BUTTON_LABEL}</Text>
      </TouchableOpacity>
    </View>
  )
};

TodoList.defaultProps = {
  items: []
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    checked: PropTypes.bool
  })),
  newItems: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onCreateItem: PropTypes.func.isRequired,
  onItemPress: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired,
  cleanItems: PropTypes.func.isRequired
}

export default TodoList;
