import React from 'react';

import data from '../../../../../utils/constants';
import ContactList from '../../../components/ContactList/index';

function Chats() {
  return <ContactList data={data.contacts} />;
}

export default Chats;
