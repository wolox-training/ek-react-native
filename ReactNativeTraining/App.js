import React from 'react';
import { Provider } from 'react-redux';

import './src/config/ReactotronConfig';
import store from './src/redux/index';
import AppNavigator from './src/app/screens/components/AppNavigator';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
