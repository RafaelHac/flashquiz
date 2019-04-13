import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { globalStyles, white } from '../utils/globalLayout';
import { Formik } from 'formik';
import { CardForm, validationSchema } from "../components/CardForm";
import { handleAddCard } from '../actions/decks';

class NewCard extends Component {
  state = {
    ready: false,
  };

  handleSubmit = (values, {setSubmitting}) => {
    const { question, answer } = values;
    const { deckTitle, dispatch, navigation} = this.props;

    setTimeout(() => {
        dispatch(handleAddCard(deckTitle, {question, answer})).
        then(() => {
          navigation.goBack();
          setSubmitting(false);
        });
      });
  };

  render() {
    return (
      <View>
        <Formik
          onSubmit={this.handleSubmit}
          render={props => <CardForm {...props}/>}
          initialValues={{ question:'', answer:'' }}
          validationSchema={validationSchema}
        />
      </View>
    )
  }
}

function mapStateToProps ({ decks }, props){
  const deckTitle = props.navigation.state.params.deckTitle;
  return {
    decks, 
    deckTitle
  }; 
};

export default withNavigation(connect(mapStateToProps)(NewCard));