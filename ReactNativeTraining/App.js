import React from 'react';
import { FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import styles from './App.styles';
import { contacts } from './src/utils/constants';

const App = () => (
  <List containerStyle={styles.container}>
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.greyLine} />}
      data={contacts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
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
      )}
    />
  </List>
);

export default App;
