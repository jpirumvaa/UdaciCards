import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../utils/styles";
import { addCard } from "../actions";
import { saveCardToDB } from "../utils/apis";

class AddDeck extends Component {
  state = {
    question: "",
    answer: "",
    wrongAnswer: "",
  };

  handleQuestionChange(value) {
    this.setState({
      question: value,
    });
  }
  handleAnswerChange(value) {
    this.setState({
      answer: value,
    });
  }
  handleWrongQChange(value) {
    this.setState({
      wrongAnswer: value,
    });
  }

  handleSubmit = () => {
    const { question, answer, wrongAnswer } = this.state;
    const { dispatch, cardInfo } = this.props;
    if (question.trim() === "") {
      alert("Question cannot be empty");
    } else if (answer.trim() === "") {
      alert("Answer cannot be empty");
    } else {
      const title = cardInfo.title;
      const card = {
        question,
        answer,
        wrongAnswer,
      };
      dispatch(addCard(title, card));
      saveCardToDB(title, card);
      this.setState({
        question: "",
        answer: "",
        wrongAnswer: "",
      });
      this.props.navigation.pop();
      //Todo: redirect to deck after adding card
    }
  };
  render() {
    const cardInformation = this.props.route.params.cardInfo;
    return (
      <View style={[styles.qandAnswer, { margin: 15 }]}>
        <Text style={{ fontSize: 20 }}>Question:</Text>
        <TextInput
          onChangeText={(value) => this.handleQuestionChange(value)}
          placeholder="Enter Question"
          value={this.state.question}
          style={styles.txtInput}
        />
        <Text style={{ fontSize: 20 }}>Wrong Answer:</Text>
        <TextInput
          onChangeText={(value) => this.handleWrongQChange(value)}
          placeholder="Enter Wrong Answer"
          value={this.state.wrongAnswer}
          style={styles.txtInput}
        />
        <Text style={{ fontSize: 20 }}>Corrent Answer:</Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={(value) => this.handleAnswerChange(value)}
          placeholder="Enter Answer"
          value={this.state.answer}
        />
        <TouchableOpacity style={styles.correct}>
          <Text style={{ fontSize: 20 }} onPress={this.handleSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state, { route }) {
  const { cardInfo } = route.params;
  return {
    cardInfo,
  };
}

export default connect(mapStateToProps)(AddDeck);
