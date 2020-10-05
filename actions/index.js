export const ADD_DECK = 'ADD DECK';

export function addDeck (deck) {
    return {
      type: ADD_DECK,
      deck,
    };
  }