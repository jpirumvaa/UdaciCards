import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Card from "./Card";
import styles from "../utils/styles";
import { black, lightBlue, red } from "../utils/colors";

class Deck extends Component {
  state = {};
  shouldComponentUpdate(nextProps) {
    return nextProps.props.route.params.data !== undefined;
  }
  render() {
    const cardInformation = this.props.route.params.cardInfo;
    const data = this.props.route.params.data;
    let singleCard;
    const noCards = data[cardInformation.title].questions.length;

    if (data == undefined) {
      alert("No Data Available");
    } else {
      singleCard = data[cardInformation.title];
    }

    return (
      <View>
        <Card card={singleCard.title} data={data} />
        <TouchableOpacity
          style={[styles.correct, styles.addCard]}
          onPress={() => {
            this.props.navigation.push("AddCard", {
              name: "Add Card",
              cardInfo: cardInformation,
              data: data,
            });
          }}
        >
          <Text style={{ fontSize: 20 }}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.correct,
            styles.addCard,
            { backgroundColor: lightBlue },
          ]}
          onPress={() => {
            if (!noCards) {
              this.props.navigation.push("NoCards", {
                name: "NoCards",
              });
            } else {
              this.props.navigation.push("Quiz", {
                name: "Quiz",
                cardInfo: cardInformation,
                data: data,
                navigation: this.props.navigation,
              });
            }
          }}
        >
          <Text style={{ fontSize: 20 }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Deck);
