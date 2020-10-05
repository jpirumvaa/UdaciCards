import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import styles from '../utils/styles'
import {addDeck} from '../actions/';
import {addDeckToDB} from '../utils/apis'

class AddDeck extends Component {
    state={
        title: ""
    }

    handleChange(value){
        this.setState ({
            title: value,
        });
    }
    handleSubmit=()=>{
        let {title}= this.state
        const {dispatch}= this.props

        if (title.trim() === "") {
            alert ('Enter a valid Deck Title');
          } else {
            const deck = {
              title: title.trim(),
              questions: [],
              score:0
            };
            console.log("Saved Deck is:", deck)
            dispatch (addDeck(deck))
            addDeckToDB(deck)
            //title="" reset input
        }
    }

    render() {
        return (
            <View style={[styles.qandAnswer, {margin: 15}]}>
                <Text style={{fontSize: 20}}>What is the name of your Deck?</Text>
                <TextInput
                    onChangeText={value => this.handleChange(value)}
                    placeholder="Enter deck title"
                    value={this.state.title}
                    style={styles.txtInput}
                />
                <TouchableOpacity style={styles.correct}>
                <Text 
                    style={{fontSize: 20}}
                    onPress={this.handleSubmit}
                >Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect() (AddDeck);