import React from 'react';
import { TabNavigator } from 'react-navigation';

import NavButtons from '../components/NavButtons/index';

import Contacts from './screens/Contacts/index';
import Chats from './screens/Chats/index';
import Groups from './screens/Groups/index';

const chatsOptions = { headerRight: <NavButtons search /> };
const contactsOptions = { headerRight: <NavButtons add search /> };

const Home = TabNavigator({
  Chats: { screen: Chats, navigationOptions: chatsOptions },
  Groups: { screen: Groups, navigationOptions: contactsOptions },
  Contacts: { screen: Contacts, navigationOptions: contactsOptions }
});

export default Home;
