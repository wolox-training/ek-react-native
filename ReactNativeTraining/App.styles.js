import { StyleSheet } from 'react-native';
import { grey1, grey2 } from './src/utils/colors';

const size = 40;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 30
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
    borderBottomWidth: 0.7
  },
  image: {
    borderRadius: 15,
    height: size,
    marginRight: 20,
    width: size
  },
  name: {
    fontSize: 15
  },
  message: {
    color: grey2,
    flex: 1,
    fontSize: 13
  }
});
