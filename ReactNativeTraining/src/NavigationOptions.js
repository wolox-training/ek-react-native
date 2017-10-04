import { lightBlue, white } from './utils/colors';

const NavigationOptions = {
  headerStyle: () => ({
    headerStyle: {
      backgroundColor: lightBlue,
      elevation: 0,
      height: 70,
      paddingTop: 20,
      paddingRight: 10
    },
    headerTitleStyle: {
      color: white
    },
    title: 'WChats'
  }),
  chatHeaderStyle: () => ({
    headerStyle: {
      backgroundColor: lightBlue,
      elevation: 0,
      height: 70,
      paddingTop: 20,
      paddingRight: 10
    },
    headerTitleStyle: {
      color: white
    }
  })
};

export default NavigationOptions;
