import React, { Component } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import data from '../../utils/constants';

import Contacts from './contacts/Contacts';
import Chats from './chats/Chats';
import Groups from './groups/Groups';
import styles from './Navigator.style';

const FirstRoute = () => <Chats chats={data.contacts} />;
const SecondRoute = () => <Groups groups={data.groups} />;
const ThirdRoute = () => <Contacts contacts={data.contacts} />;

export default class Navigator extends Component {
  state = {
    index: 0,
    routes: [{ key: '1', title: 'Chats' }, { key: '2', title: 'Groups' }, { key: '3', title: 'Contacts' }]
  };

  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} />;

  renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}
