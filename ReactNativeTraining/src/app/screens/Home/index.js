import { StackNavigator } from 'react-navigation';

import Navigator from '../components/Navigator';

import NavigationOptions from './styles';
import Chat from './screens/Chats/screens/Chat';

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
