import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import data from '../utils/dummyData.json'
import styles from '../utils/styles'

class Card extends Component {
    state = {  }
    render() {
        const obj= this.props.card
        const cardInfo= data[obj]
        const questionNumber= cardInfo.questions.length
        return (
           <TouchableOpacity style={styles.deckList}>
            <Text style={styles.deckTitle}>{cardInfo.title}</Text>
            <Text style={styles.deckNumber}>{questionNumber} {questionNumber<=1?"Card": "Cards"}</Text>
           </TouchableOpacity> 
        );
    }
}

export default Card;