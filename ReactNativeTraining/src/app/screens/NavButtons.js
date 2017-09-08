import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';

import RoundButton from './RoundButton';
import styles from './NavButtons.style';

const NavButtons = props => {
  const search = (
    <Image style={styles.image} source={{ uri: 'http://www.daemconcepcion.cl/images/iconos/lupa.png' }} />
  );
  const add = <Text style={styles.text}>+</Text>;

  return (
    <View style={styles.container}>
      {props.search && (
        <RoundButton>
          <View style={styles.search}>{search}</View>
        </RoundButton>
      )}
      {props.add && (
        <RoundButton>
          <View style={styles.add}>{add}</View>
        </RoundButton>
      )}
    </View>
  );
};

NavButtons.propTypes = {
  search: PropTypes.bool,
  add: PropTypes.bool
};

export default NavButtons;
