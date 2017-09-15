import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import { searchIcon } from '../../../../utils/constants';

import styles from './styles';

const NavButtons = props => (
  <View style={styles.container}>
    {props.search && (
      <View style={styles.search}>
        <Image style={styles.image} source={{ uri: searchIcon }} />
      </View>
    )}
    {props.add && (
      <View style={styles.add}>
        <Text style={styles.text}>{'+'}</Text>
      </View>
    )}
  </View>
);

NavButtons.propTypes = {
  search: PropTypes.bool,
  add: PropTypes.bool
};

export default NavButtons;
