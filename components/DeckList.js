import React, {Component} from 'react';
import {Text, View } from 'react-native';
import styles from '../utils/styles'
import Card from './Card'
import data from '../utils/dummyData.json'



class DeckList extends Component {
    state = {  }
    render() {
        return (
           <View style={styles.container}>
               <Text style={styles.decks}>Decks</Text>
               {
                   Object.keys(data).map((obj)=>{
                       return(
                            <Card card={obj} key={obj}/>
                       )
                   })
               }
           </View> 
        );
    }
}

export default DeckList;
