import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../utils/styles";

const Card = ({ navigation, card, data }) => {
  const obj = card;
  const cardInfo = data[card];
  const questionNumber = cardInfo.questions.length;
  return (
    <TouchableOpacity
      style={styles.deckList}
      onPress={() =>
        navigation.navigate("Deck", {
          name: "Deck",
          cardInfo: cardInfo,
          data: data,
        })
      }
    >
      <Text style={styles.deckTitle}>{cardInfo.title}</Text>
      <Text style={styles.deckNumber}>
        {questionNumber} {questionNumber <= 1 ? "Card" : "Cards"}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
