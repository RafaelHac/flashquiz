import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles, white } from '../utils/globalLayout';
import { Formik } from 'formik';
import { DeckForm, validationSchema } from "../components/DeckForm";
import { handleAddDeck } from '../actions/decks';

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
            'DeckList'
          )
        });
      } else{
        console.log('Já Existe');
        setSubmitting(false);
        resetForm();
        this.props.navigation.navigate(
          'DeckList'
        )
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