import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { RED, GREY, WHITE } from '../../../constants';

const Cross = ({ onPress, checked }) =>
  <Icon.Button
    name='times'
    color={RED}
    backgroundColor={checked ? GREY : WHITE}
    size={20}
    onPress={onPress}
  />

Cross.propTypes = {
  onPress: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default Cross;
