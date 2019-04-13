import * as API from '../utils/api';

export const LOAD_DECKS = 'LOAD_DECK';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

function loadDecks( decks ){
    return {
        type: LOAD_DECKS,
        decks
    };
};

function addDeck( title, deck ){
    return{
        type: ADD_DECK,
        deck,
        title
    };
};

function deleteDeck( title ){
    return {
        type: DELETE_DECK,
        title
    };
};

function addCard( deckTitle, card ){
    return{
        type: ADD_CARD,
        deckTitle,
        card
    };
};

function deleteCard( deckTitle, card ){
    return {
        type: DELETE_CARD,
        deckTitle,
        card
    };
};

export const handleLoadDecks = () => {
    return (dispatch) => {
        return API.loadDecks()
            .then((decks) => dispatch(loadDecks(decks)));
    };
};

export const handleAddDeck = ( title ) => {
    const deck = {
        [title]: {
            title,
            questions: []
        }
    }
    return (dispatch) => {
        return API.addDeck( deck )
            .then(() => dispatch(addDeck(title, deck)));
    };
};

export const handleDeleteDeck = ( title ) => {
    return (dispatch) => {
        return API.deleteDeck( title )
            .then(() => dispatch(deleteDeck(title)));
    };
};

export const handleAddCard = ( deckTitle, card ) => {
    return (dispatch) => {
        return API.addCard( deckTitle, card )
            .then(() => dispatch(addCard(deckTitle, card)));
    };
};

export const handleDeleteCard = ( deckTitle, card ) => {
    console.log('action', deckTitle)
    return (dispatch) => {
        return API.deleteCard( deckTitle, card )
            .then(() => dispatch(deleteCard(deckTitle, card)));
    };
};