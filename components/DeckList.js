import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "../utils/styles";
import Card from "./Card";
import { deleteAllDecks, getDecksFromDB } from "../utils/apis";
import { getDecks, removeAllDecks } from "../actions";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecksFromDB().then((decks) => {
      dispatch(getDecks(decks));
    });
  }
  deleteDecks = () => {
    const { dispatch, navigation, decks } = this.props;
    deleteAllDecks()
      .then(() => dispatch(removeAllDecks(decks)))
      .then(() => navigation.navigate("AddDeck"));
  };

  render() {
    let data = {
      ...this.props.decks,
    };

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.decks}>Decks</Text>
        <TouchableOpacity
          onPress={() => this.deleteDecks()}
          style={styles.deleteAllDecks}
        >
          <Text>Delete All Decks</Text>
        </TouchableOpacity>
        {Object.keys(data).map((obj) => {
          return (
            <Card
              card={obj}
              key={obj}
              data={data}
              navigation={this.props.navigation}
              handleRefresh={this.handleRefresh}
            />
          );
        })}
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}
export default connect(mapStateToProps)(DeckList);
