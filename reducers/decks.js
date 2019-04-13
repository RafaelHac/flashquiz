import {
    LOAD_DECKS,
    ADD_DECK,
    DELETE_DECK,
    ADD_CARD,
    DELETE_CARD
} from '../actions/decks';
import { QUIZ_RESET } from './quiz';
import { shuffle, getNoDecksMessage } from '../utils/helpers'

export default function decks (state = {}, action) {
    switch(action.type) {
        case LOAD_DECKS :
            return {
                ...action.decks
                };
        case ADD_DECK:   
            return {
                ...state,
                ...action.deck
                };
        case DELETE_DECK:
            const data = { ...state};
            data[action.title] = undefined;
            delete data[action.title];
            return data;
        case ADD_CARD:
            const editedDeck= state[action.deckTitle];
            editedDeck.questions.push(action.card);
            return {
                [editedDeck.title]:{
                    ...editedDeck
                },
                ...state
            };
        case DELETE_CARD:
            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: state[action.deckTitle].questions
                        .filter((card) => card.question !== action.card.question)
                }
            }
        case QUIZ_RESET:
            if(action.deckTitle === undefined){
                return state;
            }
            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: shuffle(state[action.deckTitle].questions)
                }
            }
        default :
            return state;
        }
  }