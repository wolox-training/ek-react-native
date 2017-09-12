import { StyleSheet } from 'react-native';

import { green, white } from '../../../../utils/colors';

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
    height: 34,
    justifyContent: 'center',
    width: 34
  },
  text: {
    color: white
  }
});
