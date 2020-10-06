import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import Buttons from "./Buttons";
import data from "../utils/dummyData.json";

class Results extends Component {
  render() {
    return (
      <View style={styles.qandAnswer}>
        <Text style={{ fontSize: 50 }}>Yes!</Text>
        <Text>{data["React"].questions[0].question}</Text>
        <Text style={{ fontSize: 30 }}>100%</Text>
        <TouchableOpacity style={styles.correct}>
          <Text style={{ fontSize: 20 }}>Corrent</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Results;
