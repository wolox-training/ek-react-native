import { StyleSheet } from 'react-native';

import { grey1, grey2 } from './src/utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  contact: {
    marginBottom: 15
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  texts: { flex: 1 },
  greyLine: {
    borderBottomColor: grey1,
    borderBottomWidth: 1
  },
  name: {
    fontSize: 15,
    marginLeft: 10
  },
  message: {
    color: grey2,
    flex: 1,
    fontSize: 13,
    fontWeight: 'normal',
    marginLeft: 10
  },
  listItem: {
    borderBottomWidth: 0,
    marginBottom: 10,
    marginTop: 10
  }
});
