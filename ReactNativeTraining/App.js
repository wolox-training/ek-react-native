import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import styles from './App.styles';
import { contacts } from './src/utils/constants';

export default class App extends Component {
  separatorComponent = () => <View style={styles.greyLine} />;
  renderItem = item => (
    <ListItem
      hideChevron
      roundAvatar
      avatar={item.avatar}
      title={item.username}
      titleStyle={styles.name}
      style={styles.listItem}
      subtitle={item.message}
      subtitleStyle={styles.message}
    />
  );

  render() {
    return (
      <List containerStyle={styles.container}>
        <FlatList
          ItemSeparatorComponent={this.separatorComponent}
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </List>
    );
  }
}
