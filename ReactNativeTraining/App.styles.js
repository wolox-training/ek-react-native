import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 30
  },

  contact: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },

  greyLine: {
    borderBottomColor: '#D5D5D5',
    borderBottomWidth: 0.7
  },

  image: {
    borderRadius: 15,
    height: 40,
    marginRight: 10,
    width: 40
  },

  name: {
    fontSize: 15
  },

  message: {
    color: '#C0C0C0',
    flex: 1,
    fontSize: 13
  }
});
