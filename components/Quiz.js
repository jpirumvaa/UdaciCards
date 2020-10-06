import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import data from "../utils/dummyData.json";
import styles from "../utils/styles";

import Buttons from "./Buttons";

class Quiz extends Component {
  state = {};
  render() {
    const quizInfo = data["React"];

    return (
      <View style={styles.qandAnswer}>
        <Text style={styles.qCount}>
          {quizInfo.questions.indexOf(quizInfo.questions[0]) + 1}/
          {quizInfo.questions.length}
        </Text>
        <View>
          <Text style={styles.deckTitle}>{quizInfo.questions[0].question}</Text>
          <Text>{quizInfo.questions[0].answer}?</Text>
        </View>
        <Buttons />
      </View>
    );
  }
}

export default Quiz;
