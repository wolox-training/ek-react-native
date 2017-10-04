import { StackNavigator } from 'react-navigation';

import Navigator from '../components/Navigator';
import Chat from '../components/Chat';

import NavigationOptions from './styles';

const Home = StackNavigator({
  Home: {
    screen: Navigator,
    navigationOptions: NavigationOptions.headerStyle
  },
  Chat: {
    screen: Chat,
    navigationOptions: NavigationOptions.chatHeaderStyle
  }
});

export default Home;
