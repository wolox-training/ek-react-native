import { connect } from 'react-redux';

import Groups from './layout';

const mapStateToProps = state => ({
  groups: state.groups,
  messages: state.messages.filter(message => message.groupId !== undefined)
});

export default connect(mapStateToProps)(Groups);
