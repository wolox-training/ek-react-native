import { StyleSheet } from 'react-native';

import { white, lightBlue, green } from '../../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  senderStyle: {
    alignItems: 'flex-end'
  },
  receiverStyle: {
    alignItems: 'flex-start'
  },
  senderBackgroundColor: {
    backgroundColor: lightBlue
  },
  receiverBackgroundColor: {
    backgroundColor: green
  },
  text: {
    borderRadius: 10,
    color: white,
    paddingVertical: 5,
    paddingHorizontal: 5
  }
});
