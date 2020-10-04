import {StyleSheet} from 'react-native'
import {white, black, lightBlue, lightGreen, red} from './colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    statusBar:{
        backgroundColor: black,
    }
  });

export default styles