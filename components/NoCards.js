import React, { Component } from "react";
import { View, Text } from "react-native";

class NoCards extends Component {
  state = {};
  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 25 }}>
          You don't have cards in this deck yet! Add card to start the quiz!
        </Text>
      </View>
    );
  }
}

export default NoCards;
