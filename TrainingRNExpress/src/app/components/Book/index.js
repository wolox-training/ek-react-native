import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { RED, PLACEHOLDER_IMAGE } from '../../../constants';

import styles from './styles.js';

function Book({ image, title, author }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image || PLACEHOLDER_IMAGE }} style={styles.icon} borderRadius={25} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  )
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