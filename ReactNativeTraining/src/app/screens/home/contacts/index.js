import React from 'react';

import data from '../../../../utils/constants';
import ContactList from '../../components/ContactList/index';

function Contacts() {
  return <ContactList data={data.contacts} />;
}

export default Contacts;
