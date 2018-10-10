import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { FIELDS } from './strings';

import styles from './styles.js';

class BookDetails extends Component {
  state = {
    book: this.props.navigation.getParam('book')
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('book').title
  })

  render () {
    return (
      <View style={styles.container}>
        {
          FIELDS.map(field =>
            <View key={field.value} style={styles.row}>
              <Text style={styles.label}>{`${field.label}: `}</Text>
              <Text style={styles.text}>{this.state.book[field.value]}</Text>
            </View>
          )
        }
      </View>
    )
  }
};

export default BookDetails;
