import { combineReducers } from 'redux';
import decks from './decks';
import quiz from './quiz';
import message from './message';

export default combineReducers({
    decks,
    quiz,
    message
})