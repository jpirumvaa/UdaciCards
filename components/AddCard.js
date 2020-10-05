import React, { Component } from 'react';
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../utils/styles'
import {addCard} from '../actions'
import { saveCardToDB } from '../utils/apis';

class AddDeck extends Component {
    state = {
        question: '',
        answer: ''
    };

    handleQuestionChange(value){
        this.setState ({
            question: value,
          });
      }
    handleAnswerChange(value){
        this.setState ({
            answer: value,
          });        
      }

    handleSubmit(){
        //const {question, answer} = this.state;
        console.log("Hello World", this.state)
        // const {dispatch, route}= this.props
        // if(question.trim()===""){
        //     alert("Question cannot be empty")
        // }else if(answer.trim()===""){
        //     alert("Answer cannot be empty")
        // }else{
        //     const title= route.params.cardInfo.title
        //     const card= {
        //         question: question,
        //         answer: answer
        //     }
        //     dispatch(addCard(title, card))
        //     saveCardToDB(title, card)
        //     this.setState({
        //         question: "",
        //         answer: ""
        //     })
        //     console.log("Saved Card is:", card)
        // }
      }
    render() {
        const cardInformation= this.props.route.params.cardInfo
        //console.log(cardInformation.title)
        return (
            <View style={[styles.qandAnswer, {margin: 15}]}>
                <Text style={{fontSize: 20}}>Question:</Text>
                <TextInput
                    onChangeText={value=> this.handleQuestionChange (value)}
                    placeholder="Enter Question"
                    value={this.state.question}
                    style={styles.txtInput}
                />
                <Text style={{fontSize: 20}}>Answer:</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={value => this.handleAnswerChange(value)}
                    placeholder="Enter Answer"
                    value={this.state.answer}
                />
                <TouchableOpacity style={styles.correct}>
                <Text 
                style={{fontSize: 20}}
                onPress={this.handleSubmit}
                >Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddDeck);