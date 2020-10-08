import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

class Results extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  render() {
    const { score, quizLength } = this.props.route.params;
    const actualScore = ((score + 1) / quizLength) * 100;

    return (
      <View style={styles.qandAnswer}>
        <Text style={{ fontSize: 30 }}>Scores</Text>
        <Text>You scored:</Text>
        <Text style={{ fontSize: 30 }}>{Math.round(actualScore)}%</Text>
        <TouchableOpacity
          style={styles.correct}
          onPress={() => {
            this.props.navigation.navigate("DeckList");
          }}
        >
          <Text>Keep Training</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.correct}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text>Retake the Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Results;
