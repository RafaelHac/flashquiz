import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE_KEY = 'Flashcard:storage';

export function getDeckByTitle( title ){
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => JSON.parse(results)[title]);
}

export function loadDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => JSON.parse(results));
}

export function addDeck ( deck ) {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(deck));
}

export function deleteDeck ( title ){
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).
        then((results) => {
          const data = JSON.parse(results);
            data[title] = undefined;
            delete data[title];
            return AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
        })
}

export function addCard (deckTitle, {question, answer}){
  return getDeckByTitle(deckTitle)
    .then((data) => {
      data.questions.push({
        question,
        answer
      });
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({[deckTitle]: data}));
    });
}

export function deleteCard (deckTitle, {question, answer}){
  console.log('apiTitle', deckTitle)
  return getDeckByTitle(deckTitle)
    .then((data) => {
      console.log('api',data)
      data.questions.filter((card) =>
        question !== card.question
      );
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({[deckTitle]: data}));
    });
}