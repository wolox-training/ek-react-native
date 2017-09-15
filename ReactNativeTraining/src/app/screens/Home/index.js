import { StackNavigator } from 'react-navigation';

import Navigator from '../components/Navigator';

import NavigationOptions from './styles';

const Home = StackNavigator({
  Home: {
    screen: Navigator,
    navigationOptions: NavigationOptions.headerStyle
  }
});

export default Home;
