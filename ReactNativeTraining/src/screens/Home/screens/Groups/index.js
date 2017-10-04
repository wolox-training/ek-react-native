import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { groupsFromCurrentUser } from '../../../../selectors';
import { groupSelected } from '../../../../redux/groups/actions';

import Groups from './layout';

const mapStateToProps = state => ({
  groups: groupsFromCurrentUser(state)
});

class GroupsContainer extends React.Component {
  handleOnClick = group => {
    this.props.dispatch(groupSelected(group));
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Chat',
        params: {
          username: group.name
        }
      })
    );
  };

  render() {
    return <Groups groups={this.props.groups} onClick={this.handleOnClick} />;
  }
}

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
