import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { BOOKS, ROUTES, RED, PLACEHOLDER_IMAGE } from '../../../constants';

import styles from './styles.js';

class Book extends Component {
  navigateToDetails = () => {
    const book = BOOKS.find(book => book.id === this.props.id);
    this.props.navigation.navigate(ROUTES.BOOK, { book });
  }

  render() {
    const { image, title, author } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.navigateToDetails}>
        <Image source={{ uri: image || PLACEHOLDER_IMAGE }} style={styles.icon} borderRadius={25} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Book.defaultProps = {
  image: PLACEHOLDER_IMAGE,
  title: 'noname',
  author: 'Anonymous'
}

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  image_url: PropTypes.string
}

export default Book;
