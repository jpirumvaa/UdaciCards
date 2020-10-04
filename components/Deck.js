import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import data from '../utils/dummyData.json'
import Card from './Card'
import styles from '../utils/styles'
import {black, lightBlue, red} from '../utils/colors'

class Deck extends Component {
    state = {  }
    render() {
        const singleCard= data["React"]
        return (
           <View>
               <Card card={singleCard.title}/>
               <TouchableOpacity style={[styles.correct, styles.addCard]}>
                    <Text style={{fontSize: 20}}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.correct, styles.addCard, {backgroundColor: lightBlue}]}>
                    <Text style={{fontSize: 20}}>Start Quiz</Text>                    
                </TouchableOpacity>
           </View> 
        );
    }
}

export default Deck;