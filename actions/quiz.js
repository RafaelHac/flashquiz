export const QUIZ_NEXT_CARD = 'QUIZ_NEXT_CARD';
export const QUIZ_FLIP = 'QUIZ_FLIP';
export const QUIZ_CORRECT = 'QUIZ_CORRECT';
export const QUIZ_WRONG = 'QUIZ_WRONG';
export const QUIZ_RESET = 'QUIZ_RESET';

export function nextCard(){
    return {
        type: QUIZ_NEXT_CARD,
    }
}

export function flipCard(){
    return {
        type: QUIZ_FLIP,
    }
}

export function correctAnswer(){
    return {
        type: QUIZ_CORRECT,
    }
}

export function wrongAnswer(){
    return {
        type: QUIZ_WRONG,
    }
}

export function resetQuiz(deckTitle){
    return {
        type: QUIZ_RESET,
        deckTitle
    }
}
