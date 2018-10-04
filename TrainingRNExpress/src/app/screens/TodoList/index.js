import React, { Component } from 'react';

import { ITEMS } from '../../../constants';

import TodoListLayout from './layout';

class TodoList extends Component {
  state = {
    items: ITEMS,
    newItem: ''
  }

  static navigationOptions = { title: 'Todo List' };

  handleChangeText = text => this.setState({ newItem: text });

  handleCreateItem = () =>
    this.setState(({ items, newItem }) =>
      ({ items: [...items, { name: newItem, checked: false }], newItem: '' })
    );

  handleItemPress = index => this.setState(({ items }) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    return { items: newItems }
  });

  handleItemRemove = index =>
    this.setState(({ items }) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return { items: newItems }
    });

  handleCleanItems = () =>
    this.setState(({ items }) => ({ items: items.filter(item => !item.checked) }))

  render() {
    return (
      <TodoListLayout
        newItem={this.state.newItem}
        items={this.state.items}
        onChangeText={this.handleChangeText}
        onItemPress={this.handleItemPress}
        onItemRemove={this.handleItemRemove}
        onCreateItem={this.handleCreateItem}
        cleanItems={this.handleCleanItems}
      />
    )
  }
}

export default TodoList;
