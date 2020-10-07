import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
//import data from "../utils/dummyData.json";
import styles from "../utils/styles";
import { red } from "../utils/colors";
//import { addScore } from "../actions";

import Buttons from "./Buttons";

class Quiz extends Component {
  state = {
    qIndex: 0,
    score: 0,
  };
  checkCorrect = (selectedAnswer, quizInfo) => {
    if (selectedAnswer === quizInfo.questions[this.state.qIndex].answer) {
      alert("You Got the Correct Answer");
      this.setState((prev) => ({
        score: prev.score + 1,
        qIndex:
          quizInfo.questions.length - 1 >= prev.qIndex + 1
            ? prev.qIndex + 1
            : prev.qIndex,
      }));
    } else {
      alert("Ooops! You lost your chance to win");
      this.setState((prev) => ({
        score: prev.score,
        qIndex:
          quizInfo.questions.length - 1 >= prev.qIndex + 1
            ? prev.qIndex + 1
            : prev.qIndex,
      }));
    }
  };
  checkWrong = (selectedAnswer, quizInfo) => {
    //const res = checkLength();
    if (selectedAnswer !== quizInfo.questions[this.state.qIndex].answer) {
      alert("You Got the Correct Answer");
      this.setState((prev) => ({
        score: prev.score + 1,
        qIndex:
          quizInfo.questions.length - 1 >= prev.qIndex + 1
            ? prev.qIndex + 1
            : prev.qIndex,
      }));
    } else {
      alert("Ooops! You lost your chance to win");
      this.setState((prev) => ({
        score: prev.score,
        qIndex:
          quizInfo.questions.length - 1 >= prev.qIndex + 1
            ? prev.qIndex + 1
            : prev.qIndex,
      }));
    }
  };

  render() {
    const { cardInfo, data } = this.props.route.params;
    const { qIndex, score } = this.state;
    //console.log("data is:", data, "Naho card info is", cardInfo);
    const quizInfo = data[cardInfo.title];
    const answers = [
      quizInfo.questions[this.state.qIndex].answer,
      quizInfo.questions[this.state.qIndex].wrongAnswer,
    ];
    //console.log(answers);
    const randomIndex = Math.floor(Math.random() * answers.length);
    const selectedAnswer = answers[randomIndex];
    //console.log(randomIndex);
    // const randomaAnswer= answers[randomIndex]

    //const isDone = checkFinal();
    if (this.state.qIndex <= quizInfo.questions.length - 1) {
      return (
        <View style={styles.qandAnswer}>
          <Text style={styles.qCount}>
            {quizInfo.questions.indexOf(quizInfo.questions[this.state.qIndex]) +
              1}
            /{quizInfo.questions.length}
          </Text>

          <View>
            <Text style={styles.deckTitle}>
              {quizInfo.questions[this.state.qIndex].question}
            </Text>
            <Text>{selectedAnswer}?</Text>
          </View>
          {quizInfo.questions.indexOf(quizInfo.questions[this.state.qIndex]) <
            quizInfo.questions.length && (
            <View>
              <TouchableOpacity
                style={styles.correct}
                onPress={() => {
                  console.log(this.state);
                  console.log(quizInfo.questions.length);
                  this.checkCorrect(selectedAnswer, quizInfo);
                }}
              >
                <Text style={{ fontSize: 20 }}>Corrent</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.correct, { backgroundColor: red }]}
                onPress={() => {
                  console.log(this.state);
                  console.log(quizInfo.questions.length);
                  this.checkWrong(selectedAnswer, quizInfo);
                }}
              >
                <Text style={{ fontSize: 20 }}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
    } else {
      return (
        <View>
          <Text>Hello, you are done</Text>
        </View>
      );
    }
  }
}

export default Quiz;
