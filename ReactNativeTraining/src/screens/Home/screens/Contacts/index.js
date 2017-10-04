import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { contactsFromCurrentUser } from '../../../../selectors';
import { contactSelected } from '../../../../redux/contacts/actions';

import Contacts from './layout';

const mapStateToProps = state => ({
  contacts: contactsFromCurrentUser(state)
});

class ContactsContainer extends React.Component {
  handleOnClick = contact => {
    this.props.dispatch(contactSelected(contact));
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Chat',
        params: {
          username: contact.name
        }
      })
    );
  };

  render() {
    return <Contacts contacts={this.props.contacts} onClick={this.handleOnClick} />;
  }
}

ContactsContainer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string
    })
  )
};

export default connect(mapStateToProps)(ContactsContainer);
