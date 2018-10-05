import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { BOOKS } from '../../../constants';
import { FIELDS } from './strings';

import styles from './styles.js';

class BookDetails extends Component {
  state = { book: {}}

  componentDidMount() {
    const id = this.props.navigation.state.params.id;
    this.setState({ book: BOOKS.find(book => book.id === id) })
  }

  static navigationOptions = ({ navigation }) => ({
    title: BOOKS.find(book => book.id === navigation.state.params.id).title
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
