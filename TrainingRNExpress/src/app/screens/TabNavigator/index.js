import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import { RED } from '../../../constants';

import TodoList from '../TodoList';
import BooksList from '../BooksList';

const TabNavigator = createMaterialTopTabNavigator({
  Todo: TodoList,
  Books: BooksList,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: RED,
    },
    labelStyle: {
      fontWeight: 'bold'
    }
  }
});

export default TabNavigator;
