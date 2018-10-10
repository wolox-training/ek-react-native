import { StyleSheet } from 'react-native';

import { RED, GREY, WHITE } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  },
  text: {
    fontSize: 15
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default styles;
