export const QUESTION_SIDE = 'QUESTION_SIDE';
export const ANSWER_SIDE = 'ANSWER_SIDE';

//Fisher-Yates Shuffling Algorithm
export function shuffle(array) {
    let i;
    for (i  = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
