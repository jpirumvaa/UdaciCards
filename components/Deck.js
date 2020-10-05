import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import data from '../utils/dummyData.json'
import Card from './Card'
import styles from '../utils/styles'
import {black, lightBlue, red} from '../utils/colors'

class Deck extends Component {
    state = {  }
    render() {
        
        const cardInformation= this.props.route.params.cardInfo
        const singleCard= data[cardInformation.title]
        return (
           <View>
               <Card 
               card={singleCard.title}
               />
               <TouchableOpacity 
                    style={[styles.correct, styles.addCard]}
                    onPress={()=>this.props.navigation.push("AddCard", {name: "Add Card", cardInfo: cardInformation})}
               >
                    <Text style={{fontSize: 20}}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.correct, styles.addCard, {backgroundColor: lightBlue}]}
                    onPress={()=>this.props.navigation.push("Quiz")}
                >
                    <Text style={{fontSize: 20}}>Start Quiz</Text>                    
                </TouchableOpacity>
           </View> 
        );
    }
}

export default Deck;