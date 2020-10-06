import {AsyncStorage} from 'react-native';
const DECKS_DB_KEY = 'Flashcard:decks';

export function addDeckToDB (deck) {
    return AsyncStorage.mergeItem (
      DECKS_DB_KEY,
      JSON.stringify ({
        [deck.title]: {
          title: deck.title,
          questions: [],
          score:0
        },
      })
    );
  }

export function getDecksFromDB(){
    return AsyncStorage.getItem (DECKS_DB_KEY).then (results =>
        JSON.parse (results)
      );
}

export function receiveDeck(id) {
  return AsyncStorage.getItem (DECKS_DB_KEY)
    .then (deck => {
      return JSON.parse (deck)[id];
    })
    .catch (e =>
      console.log ('An error occured. Please, try again: ', e)
    );
}

export function saveCardToDB (deckTitle, card) {
    receiveDeck(deckTitle).then (deck => {
      return AsyncStorage.mergeItem (
        DECKS_DB_KEY,
        JSON.stringify ({
          [deckTitle]: {
            ...deck,
            questions: [...deck.questions, card],
          },
        })
      );
    });
  }
export function deleteAllDecks(){
  return AsyncStorage.clear()
}