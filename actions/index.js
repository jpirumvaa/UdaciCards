export const ADD_DECK = "ADD DECK";
export const GET_DECKS = "GET DECKS";
export const ADD_CARD = "ADD CARD";
export const DELETE_DECKS = "DELETE DECKS";
export const ADD_SCORE = "ADD SCORE";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}
export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  };
}

export function removeAllDecks(data) {
  return {
    type: DELETE_DECKS,
    data,
  };
}

export function addScore(cardTitle, deckInfo) {
  return {
    type: ADD_SCORE,
    deckInfo,
    cardTitle,
  };
}
