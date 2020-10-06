export const ADD_DECK = "ADD DECK";
export const GET_DECKS = "GET DECKS";
export const ADD_CARD = "ADD CARD";

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
