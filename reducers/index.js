import { ActionSheetIOS } from 'react-native';
import {ADD_DECK, GET_DECKS, ADD_CARD} from '../actions/index'

export default function deckReducer(state = {}, action){
    switch(action.type){
        case ADD_DECK:
            const {title, questions} = action.deck;
            return {
              ...state,
              [title]: {
                title,
                questions: [],
              },
        };
        case GET_DECKS:
            return {
                ...state,
                ...action.decks,
        };
        case ADD_CARD:
            const {deckTitle, card} = action;
            return {
                ...state,
                [deckTitle]: {
                ...state[deckTitle],
                questions: [...state[deckTitle].questions, card],
                },
        };
    }
}