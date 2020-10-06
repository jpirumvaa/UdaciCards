import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import { red } from "../utils/colors";
import data from "../utils/dummyData.json";

class Results extends Component {
  render() {
    return (
      <View style={styles.qandAnswer}>
        <Text style={{ fontSize: 50 }}>Oops!</Text>
        <Text>{data["React"].questions[0].question}</Text>
        <Text style={{ fontSize: 30 }}>0%</Text>
        <TouchableOpacity style={[styles.correct, { backgroundColor: red }]}>
          <Text style={{ fontSize: 20 }}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Results;
