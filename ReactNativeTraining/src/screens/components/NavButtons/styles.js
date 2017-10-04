import { StyleSheet } from 'react-native';

import { green, white } from '../../../utils/colors';

const imageSize = 34;

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  search: {
    backgroundColor: green,
    borderRadius: 30
  },
  image: {
    height: imageSize,
    width: imageSize
  },
  add: {
    alignItems: 'center',
    height: imageSize,
    justifyContent: 'center',
    width: imageSize
  },
  text: {
    color: white
  }
});
