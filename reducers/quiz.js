import {
  QUIZ_NEXT_CARD,
  QUIZ_FLIP,
  QUIZ_CORRECT,
  QUIZ_WRONG,
  QUIZ_RESET,
} from '../actions/quiz';
import { QUESTION_SIDE, ANSWER_SIDE } from '../utils/helpers';

export default function quiz (state = {}, action) {
    switch(action.type) {
        case QUIZ_NEXT_CARD:
            return {
                ...state,
                sideOfCard: QUESTION_SIDE,
                currentCard: state.currentCard + 1
            };
        case QUIZ_FLIP:
            return {
                ...state,
                sideOfCard: state.sideOfCard === QUESTION_SIDE ? ANSWER_SIDE : QUESTION_SIDE
            };
        case QUIZ_CORRECT:
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1
            };
        case QUIZ_WRONG:
            return {
                ...state,
                wrongAnswers: state.wrongAnswers + 1
            };
        case QUIZ_RESET:
            return {
                currentCard: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                sideOfCard: QUESTION_SIDE,
            };
        default:
            return state;
    };
};