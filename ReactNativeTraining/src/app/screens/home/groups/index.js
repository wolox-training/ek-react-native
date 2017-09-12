import React from 'react';

import data from '../../../../utils/constants';
import ContactList from '../../components/ContactList/index';

function Groups() {
  return <ContactList data={data.groups} />;
}

export default Groups;
