import React from 'react';
import { TabNavigator } from 'react-navigation';

import NavButtons from '../NavButtons/index';
import Contacts from '../../Home/screens/Contacts/index';
import Chats from '../../Home/screens/Chats/index';
import Groups from '../../Home/screens/Groups/index';

const chatsOptions = { headerRight: <NavButtons search /> };
const contactsOptions = { headerRight: <NavButtons add search /> };

const Navigator = TabNavigator({
  Chats: { screen: Chats, navigationOptions: chatsOptions },
  Groups: { screen: Groups, navigationOptions: contactsOptions },
  Contacts: { screen: Contacts, navigationOptions: contactsOptions }
});

export default Navigator;
