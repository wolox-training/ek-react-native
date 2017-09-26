import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import Home from '../../Home';
import loadData from '../../../../redux/appNavigator/actions';

class AppNavigator extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadData(1));
  }

  render() {
    const { dispatch, nav, ...navigatorProps } = this.props;
    return <Home {...navigatorProps} navigation={addNavigationHelpers({ dispatch, state: nav })} />;
  }
}

AppNavigator.propTypes = {
  nav: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  load: PropTypes.func
};

const mapStateToProps = store => ({ nav: store.nav });

export default connect(mapStateToProps)(AppNavigator);
