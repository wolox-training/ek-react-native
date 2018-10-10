import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { ROUTES, TITLES, RED, WHITE } from './src/constants';

import TabNavigator from './src/app/screens/TabNavigator';
import BookDetails from './src/app/screens/BookDetails';

const App = createStackNavigator({
  [ROUTES.HOME]: {
    screen: TabNavigator,
    navigationOptions: () => ({
      title: TITLES.HOME,
      headerStyle: {
        backgroundColor: RED,
        borderBottomWidth: 0
      },
      headerTintColor: WHITE
    }),
  },
  [ROUTES.BOOK]: {
    screen: BookDetails,
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
