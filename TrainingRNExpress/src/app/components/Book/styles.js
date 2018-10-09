import { StyleSheet } from 'react-native';

import { GREY, WHITE, DARK_GREY } from '../../../constants';

const ICON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },
  icon: {
    marginRight: 20,
    height: ICON_SIZE,
    width: ICON_SIZE
  },
  title: {
    color: DARK_GREY,
    fontWeight: 'bold',
    marginBottom: 5
  },
  author: {
    color: DARK_GREY
  }
});

export default styles;
