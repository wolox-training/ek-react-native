import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Chat from './screens/Chat';
import NavigationOptions from './NavigationOptions';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: NavigationOptions.headerStyle
  },
  Chat: {
    screen: Chat,
    navigationOptions: NavigationOptions.chatHeaderStyle
  }
});

export default Navigator;
