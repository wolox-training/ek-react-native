import { StyleSheet } from 'react-native';

import { RED, GREY } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    padding: 10
  },
  button: {
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: GREY,
    color: RED,
    padding: 10
  }
});

export default styles;
