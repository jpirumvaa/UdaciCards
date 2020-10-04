import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../utils/styles'

class AddDeck extends Component {
    render() {
        return (
            <View style={[styles.qandAnswer, {margin: 15}]}>
                <Text style={{fontSize: 20}}>What is the name of your Deck?</Text>
                <TextInput
                    style={styles.txtInput}
                />
                <TouchableOpacity style={styles.correct}>
                <Text style={{fontSize: 20}}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default AddDeck;