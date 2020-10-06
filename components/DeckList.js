import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "../utils/styles";
import Card from "./Card";
import { deleteAllDecks, getDecksFromDB } from "../utils/apis";
import { getDecks } from "../actions";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckList extends Component {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    getDecksFromDB().then((decks) => {
      dispatch(getDecks(decks));
    });
  }

  render() {
    const data = {
      ...this.props.decks,
    };

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.decks}>Decks</Text>
        <TouchableOpacity
          onPress={() => deleteAllDecks()}
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
