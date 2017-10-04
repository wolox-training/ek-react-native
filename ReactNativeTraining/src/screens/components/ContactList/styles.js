import { StyleSheet } from 'react-native';

import { grey1, grey2, white } from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  listContainer: {
    flex: 1,
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
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
