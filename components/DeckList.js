import React, {Component} from 'react';
import {Text, ScrollView } from 'react-native';
import styles from '../utils/styles'
import Card from './Card'
import data from '../utils/dummyData.json'



class DeckList extends Component {
    state = {  }
    render() {
        return (
           <ScrollView style={styles.container}>
               <Text style={styles.decks}>Decks</Text>
               {
                   Object.keys(data).map((obj)=>{
                       return(
                            <Card card={obj} key={obj} navigation={this.props.navigation}/>
                       )
                   })
               }
           </ScrollView> 
        );
    }
}

export default DeckList;
