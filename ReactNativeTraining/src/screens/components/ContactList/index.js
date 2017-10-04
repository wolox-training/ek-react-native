import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import styles from './styles';

export default class ContactList extends Component {
  separatorComponent = () => <View style={styles.greyLine} />;

  handlePress = item => this.props.onClick(item);

  renderItem = item => (
    <ListItem
      hideChevron
      roundAvatar
      avatar={item.avatar}
      onPress={() => this.handlePress(item)}
      title={item.name}
      titleStyle={styles.name}
      style={styles.listItem}
      subtitle={item.message}
      subtitleStyle={styles.message}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <List containerStyle={styles.listContainer}>
          <FlatList
            ItemSeparatorComponent={this.separatorComponent}
            data={this.props.data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </List>
      </View>
    );
  }
}

ContactList.defaultProps = {
  onClick: () => {}
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      message: PropTypes.string
    })
  ),
  onClick: PropTypes.func
};