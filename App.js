import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import DeckList from "./components/DeckList";
import { lightBlue } from "./utils/colors";
import Quiz from "./components/Quiz";
import Deck from "./components/Deck";
import Results from "./components/Results";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import NoCards from "./components/NoCards";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const Tabs = createBottomTabNavigator();
const DeckListStack = createStackNavigator();
const AddDeckStack = createStackNavigator();

const DeckListScreen = () => (
  <DeckListStack.Navigator>
    <DeckListStack.Screen
      name="DeckList"
      component={DeckList}
      options={{ title: "Available Decks" }}
    />
    <DeckListStack.Screen name="Deck" component={Deck} />
    <DeckListStack.Screen
      name="NoCards"
      component={NoCards}
      options={{ title: "No Cards" }}
    />
    <DeckListStack.Screen
      name="AddCard"
      component={AddCard}
      options={{ title: "Add Card" }}
    />
    <DeckListStack.Screen name="Quiz" component={Quiz} />
    <DeckListStack.Screen name="Results" component={Results} />
    <DeckListStack.Screen name="AddDeck" component={AddDeck} />
  </DeckListStack.Navigator>
);

const AddDeckScreen = () => (
  <AddDeckStack.Navigator>
    <AddDeckStack.Screen
      name="AddDeck"
      component={AddDeck}
      options={{ title: "Add Deck" }}
    />
  </AddDeckStack.Navigator>
);

const deckListOptions = {
  tabBarLabel: "Deck List",
  tabBarIcon: () => <AntDesign name="filetext1" size={24} color="black" />,
  tabBarBadge: 1,
};

const addDeckOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: () => <AntDesign name="addfile" size={24} color="black" />,
  tabBarBadge: 2,
};

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <StatusBar backgroundColor={lightBlue} barStyle="light-content" />
        <Tabs.Navigator>
          <Tabs.Screen
            name="DeckList"
            component={DeckListScreen}
            options={deckListOptions}
          />
          <Tabs.Screen
            name="Add Deck"
            component={AddDeckScreen}
            options={addDeckOptions}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
