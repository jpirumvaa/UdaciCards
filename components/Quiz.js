import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import { red } from "../utils/colors";

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

    const quizInfo = data[cardInfo.title];
    const answers = [
      quizInfo.questions[this.state.qIndex].answer,
      quizInfo.questions[this.state.qIndex].wrongAnswer,
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const selectedAnswer = answers[randomIndex];

    const quizLocation = quizInfo.questions.indexOf(
      quizInfo.questions[this.state.qIndex]
    );
    const finalScore = this.state.score;
    const quizLength = quizInfo.questions.length;
    const checkCompletion = (quizLocation, index) => {
      const scores = (this.state.score + 1 / quizInfo.questions.length) * 100;
      if (quizLocation === index) {
        this.props.navigation.push("Results", {
          score: finalScore,
          quizLength: quizLength,
        });
      }
    };

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
                checkCompletion(quizLocation, quizInfo.questions.length - 1);
                this.checkCorrect(selectedAnswer, quizInfo);
              }}
            >
              <Text style={{ fontSize: 20 }}>Corrent</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.correct, { backgroundColor: red }]}
              onPress={() => {
                checkCompletion(quizLocation, quizInfo.questions.length - 1);
                this.checkWrong(selectedAnswer, quizInfo);
              }}
            >
              <Text style={{ fontSize: 20 }}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Quiz;
