import React, { PropTypes } from 'react';

import ContactList from '../../../components/ContactList';

const Chats = data => <ContactList data={data.chats} onClick={data.onClick} />;

Chats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      message: PropTypes.string
    })
  )
};

export default Chats;
