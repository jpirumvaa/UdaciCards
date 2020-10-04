import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import styles from './utils/styles'
import DeckList from './components/DeckList'
import {lightBlue} from './utils/colors'
import Quiz from './components/Quiz'
import Deck from './components/Deck'
import Results from './components/Results'
import FalseAnswer from './components/FalseAnswer'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor={lightBlue}
        barStyle="light-content"/>
      <View style={{height: 30}}></View>
      <AddCard/>
      <Text>Hello from my awesome App: UdaciCards</Text>      
    </View>
  );
}
