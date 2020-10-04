import {StyleSheet} from 'react-native'
import {white, black, lightBlue, lightGreen, red, pink} from './colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white, 
    },
    deckList:{
      backgroundColor: white,
      color: black,
      justifyContent: "flex-start",
      marginTop: 30,
      alignItems: "center",
      backgroundColor: lightGreen,
      paddingRight: 30,
      paddingLeft: 30,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 10,
      margin:10
    },
    deckTitle:{
      fontSize: 30,      
    },
    decks:{
      fontSize: 40,
      color: lightBlue,
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      borderBottomColor: black,
      borderBottomWidth: 5,
      margin: 30,
    },
    qandAnswer:{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: "center"
    },
    correct:{
      backgroundColor: lightGreen,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 35,
      paddingLeft: 35,
      marginTop: 20,
      marginBottom: 20
    },
    qCount:{
      alignSelf:"flex-end",
      fontSize: 20,
      marginRight: 10 
    },
    addCard: {
      margin: 70, 
      backgroundColor: pink, 
      alignItems: "center"
    },
    txtInput:{ 
      height: 35, 
      width: 300, 
      paddingLeft:10, 
      borderColor: black, 
      borderWidth: 1,
      marginTop: 15,
    }
  });

export default styles