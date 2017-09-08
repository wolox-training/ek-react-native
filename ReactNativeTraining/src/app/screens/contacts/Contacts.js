import React, { PropTypes } from 'react';
import { View } from 'react-native';

import ContactList from '../ContactList';
import NavButtons from '../NavButtons';

import styles from './Contacts.style';

const Contacts = props => (
  <View style={styles.container}>
    <NavButtons search add />
    <ContactList data={props.contacts} />
  </View>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      message: PropTypes.string
    })
  )
};

export default Contacts;
