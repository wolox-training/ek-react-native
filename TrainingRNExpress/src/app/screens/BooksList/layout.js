import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Book from '../../components/Book';

class BooksList extends Component {
  renderItem = ({ item, index }) =>
    <Book image={item.image_url} title={item.title} author={item.author} />

  keyExtractor = (_, index) => index.toString();

  render() {
    return (
      <FlatList
        data={this.props.books}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
};

BooksList.defaultProps = {
  books: []
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }))
}

export default BooksList;
