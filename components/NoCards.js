import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../utils/styles";

const NoCards = (props) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 25 }}>
        You don't have cards in this deck yet! Add card to start the quiz!
      </Text>
      <TouchableOpacity
        style={[styles.correct, styles.addCard]}
        onPress={() => props.navigation.pop()}
      >
        <Text style={{ fontSize: 25 }}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoCards;
