import React, { Component } from 'react';

import { BOOKS } from '../../../constants';

import BooksListLayout from './layout';

class BooksList extends Component {
  static navigationOptions = { title: 'Book List' };

  render() {
    return (
      <BooksListLayout books={BOOKS} navigation={this.props.navigation} />
    )
  }
}

export default BooksList;
