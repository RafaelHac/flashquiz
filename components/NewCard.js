import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { CardForm, validationSchema } from "../components/CardForm";
import { handleAddCard } from '../actions/decks';
import { showMessage, ERROR, SUCCESS }from '../actions/message';

class NewCard extends Component {
  state = {
    ready: false,
  };

  handleSubmit = (values, {setSubmitting}) => {
    const { question, answer } = values;
    const { decks, deckTitle, dispatch, navigation} = this.props;

    setTimeout(() => {
      const sameQuestion = decks[deckTitle].questions.filter((card) => card.question === question);
      if(sameQuestion.length == 0){
        dispatch(handleAddCard(deckTitle, {question, answer}))
          .then(() => {
            navigation.goBack();
            dispatch(showMessage('Card saved successfully!', SUCCESS))
            setSubmitting(false);
          });
      } else {
        navigation.goBack();
        dispatch(showMessage('Card already registered!', ERROR))
        setSubmitting(false);
      }
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