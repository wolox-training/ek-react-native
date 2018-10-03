import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import TodoList from './src/app/screens/TodoList';

const App = createMaterialTopTabNavigator({ Todo: TodoList });

export default App;
