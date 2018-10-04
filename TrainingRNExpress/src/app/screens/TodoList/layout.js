import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';

import { TEXT_PLACEHOLDER, BUTTON_LABEL } from './strings.js';
import { RED } from '../../../constants';
import Item from '../../components/Item';
import styles from './styles.js';

class TodoList extends Component {
  renderItem = ({ item, index }) =>
    <Item
      item={item}
      onPress={() => this.props.onItemPress(index)}
      onRemove={() => this.props.onItemRemove(index)}
    />

  keyExtractor = (_, index) => index.toString();

  render() {
    const { items, newItem, onChangeText, onCreateItem, cleanItems } = this.props;
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
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <TouchableOpacity onPress={cleanItems}>
          <Text style={styles.button}>{BUTTON_LABEL}</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
