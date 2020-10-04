import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';
import styles from './utils/styles'
import DeckList from './components/DeckList'
import {black, lightBlue} from './utils/colors'
import Quiz from './components/Quiz'
import Deck from './components/Deck'
import Results from './components/Results'
import FalseAnswer from './components/FalseAnswer'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'

const Tabs= createBottomTabNavigator()
const DeckListStack= createStackNavigator()
const AddDeckStack= createStackNavigator()

const DeckListScreen= () =>(
  <DeckListStack.Navigator>
    <DeckListStack.Screen name="DeckList" component={DeckList} options={
      {title: "Available Decks"}
    } />
    <DeckListStack.Screen name="Deck" component={Deck} />
    <DeckListStack.Screen name="AddCard" component={AddCard} 
    options={
      {title: "Add Card"}
    }/>
    <DeckListStack.Screen name="Quiz" component={Quiz} />
  </DeckListStack.Navigator>
)

const AddDeckScreen= () =>(
  <AddDeckStack.Navigator>
    <AddDeckStack.Screen name="AddDeck" component={AddDeck} 
    options={
      {title: "Add Deck"}
    }/>
  </AddDeckStack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={lightBlue}
        barStyle="light-content"/>
      {/*
      <View style={styles.container}>
      <StatusBar 
        backgroundColor={lightBlue}
        barStyle="light-content"/>
      <View style={{height: 30}}></View>
      <AddCard/>
      <Text>Hello from my awesome App: UdaciCards</Text>      
    </View>
       */
      }
      <Tabs.Navigator>
          <Tabs.Screen name="DeckList" component={DeckListScreen}
          options={{
            tabBarLabel: 'Deck List',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="filetext1" size={24} color="black" />
            ),
            tabBarBadge: 1,            
          }}
          />
          <Tabs.Screen name="Add Deck" 
          component={AddDeckScreen} 
          options={{
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="addfile" size={24} color="black" />
            ),
            tabBarBadge: 2
          }}         
          />
      </Tabs.Navigator>
      
    </NavigationContainer>
    
  );
}
