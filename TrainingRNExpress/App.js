import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { RED, WHITE } from './src/constants';

import TabNavigator from './src/app/screens/TabNavigator';
import BookDetails from './src/app/screens/BookDetails';

const App = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: () => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: RED,
        borderBottomWidth: 0
      },
      headerTintColor: WHITE
    }),
  },
  Book: {
    screen: BookDetails,
    path: 'book/:id',
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: RED,
        borderBottomWidth: 0
      },
      headerTintColor: WHITE
    })
  }
});

export default App;
