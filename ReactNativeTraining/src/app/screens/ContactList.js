import React, { PropTypes, Component } from 'react';
import { FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import styles from './ContactList.style';

export default class ContactList extends Component {
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
          data={this.props.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </List>
    );
  }
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      message: PropTypes.string
    })
  )
};
