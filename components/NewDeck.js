import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles, white } from '../utils/globalLayout';
import { Formik } from 'formik';
import { DeckForm, validationSchema } from "../components/DeckForm";
import { handleAddDeck } from '../actions/decks';
import { showMessage, SUCCESS, ERROR } from '../actions/message';

class NewDeck extends Component {
  state = {
    ready: false,
  };

  handleSubmit = (values, {setSubmitting, resetForm}) => {
    const { title } = values;
    const { decks, dispatch } = this.props;

    setTimeout(() => {
      if(decks[title] === undefined){
        dispatch(handleAddDeck(title)).
        then((deck) => {
          setSubmitting(false);
          resetForm();
          this.props.navigation.navigate(
            'DeckDetails',
            { deckTitle: title }
          )
          dispatch(showMessage("New deck saved successfully!", SUCCESS));
        });
      } else{
        setSubmitting(false);
        resetForm();
        this.props.navigation.navigate(
          'DeckList'
        )
        dispatch(showMessage("Deck already Exists!", ERROR));
      }
    });
  };

  render() {

    return (
      <View>
        <Formik
          onSubmit={this.handleSubmit}
          render={props => <DeckForm {...props}/>}
          initialValues={{ title:'' }}
          validationSchema={validationSchema}
        />
      </View>
    )
  }
}

function mapStateToProps ({ decks }){
  return {
    decks
  }; 
};

export default connect(mapStateToProps)(NewDeck);