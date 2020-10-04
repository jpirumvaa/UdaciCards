import React,{Component} from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import {red} from '../utils/colors'
import styles from '../utils/styles';

const Buttons = () => {
    return (
        <View>
            <TouchableOpacity style={styles.correct}>
                <Text style={{fontSize: 20}}>Corrent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.correct,{backgroundColor: red}]}>
                <Text style={{fontSize: 20}}>Incorrect</Text>                    
            </TouchableOpacity>
        </View>
    );
}

export default Buttons;