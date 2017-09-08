import React, { PropTypes } from 'react';
import { View } from 'react-native';

import ContactList from '../ContactList';
import NavButtons from '../NavButtons';

import styles from './Groups.style';

const Groups = props => (
  <View style={styles.container}>
    <NavButtons add search />
    <ContactList data={props.groups} />
  </View>
);

Groups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string
    })
  )
};

export default Groups;
