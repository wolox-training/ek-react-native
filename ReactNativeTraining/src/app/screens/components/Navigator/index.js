import React from 'react';
import { TabNavigator } from 'react-navigation';

import NavButtons from '../NavButtons/index';
import Contacts from '../../home/contacts/index';
import Chats from '../../home/chats/index';
import Groups from '../../home/groups/index';

const chatsOptions = { headerRight: <NavButtons search /> };
const contactsOptions = { headerRight: <NavButtons add search /> };

const Navigator = TabNavigator({
  Chats: { screen: Chats, navigationOptions: chatsOptions },
  Groups: { screen: Groups, navigationOptions: contactsOptions },
  Contacts: { screen: Contacts, navigationOptions: contactsOptions }
});

export default Navigator;
