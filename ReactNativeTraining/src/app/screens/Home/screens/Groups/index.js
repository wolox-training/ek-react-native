import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { groupsFromCurrentUser } from '../selectors';

import Groups from './layout';

const mapStateToProps = state => ({
  groups: groupsFromCurrentUser(state)
});

const GroupsContainer = ({ groups }) => <Groups groups={groups} />;

GroupsContainer.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      message: PropTypes.string
    })
  )
};

export default connect(mapStateToProps)(GroupsContainer);
