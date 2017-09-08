import { StyleSheet } from 'react-native';

import { green, lightBlue, white } from '../../utils/colors';

const imageSize = 34;

export default StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    position: 'relative',
    flexDirection: 'row',
    right: -20,
    top: 20,
    zIndex: 10
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
    backgroundColor: lightBlue,
    borderRadius: 30,
    height: 34,
    justifyContent: 'center',
    width: 34
  },
  text: {
    color: white
  }
});
