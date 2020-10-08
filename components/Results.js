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

    return (
      <View style={styles.qandAnswer}>
        <Text style={{ fontSize: 30 }}>Scores</Text>
        <Text>You scored:</Text>
        <Text style={{ fontSize: 30 }}>
          {((score + 1) / quizLength) * 100}%
        </Text>
        <TouchableOpacity
          style={styles.correct}
          onPress={() => {
            this.props.navigation.navigate("DeckList");
          }}
        >
          <Text>Keep Training</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Results;
