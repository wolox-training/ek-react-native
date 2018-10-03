import { StyleSheet } from 'react-native';

import { GREY, WHITE } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  checkbox: {
    backgroundColor: WHITE,
    borderWidth: 0,
    marginTop: 8,
    padding: 0,
    width: 20
  },
  buttonsContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  checked: {
    backgroundColor: GREY
  }
});

export default styles;
