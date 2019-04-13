import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { object, string, required } from 'yup';
import { globalStyles, gray, amber } from '../utils/globalLayout';

export const validationSchema = object({
  question: string("Enter Question of card")
      .required("Question is required"),
  answer: string("Enter Answer of card")
      .required("Answer is required")
});

export const CardForm = (props) => {
    const {
      values: { question, answer },
      errors,
      touched,
      handleSubmit,
      handleBlur,
      handleChange,
      isValid,
    } = props;
    return (
      <View style={globalStyles.item}>
        <Text style={{marginTop:10, color: gray}}>Question</Text>
        <TextInput
          value={question}
          helperText={touched.question ? errors.question : ""}
          error={touched.question && Boolean(errors.question)}
          onChangeText={handleChange('question')}
          onBlur={handleBlur('question')}
          placeholder={`Input here the card's question`}
          errorMessage={touched.question && errors.question ? errors.question : undefined}
          fullWidth
        />
        {errors.question &&
        <Text style={{ fontSize: 12, color: 'red' }}>{errors.question}</Text>}
        
        <Text style={{marginTop:10, color: gray}}>Answer</Text>
        <TextInput
          value={answer}
          helperText={touched.answer ? errors.answer : ""}
          error={touched.answer && Boolean(errors.answer)}
          onChangeText={handleChange('answer')}
          onBlur={handleBlur('answer')}
          placeholder={`Input here the card's answer`}
          errorMessage={touched.answer && errors.answer ? errors.answer : undefined}
          fullWidth
        />
        {errors.answer &&
        <Text style={{ fontSize: 12, color: 'red' }}>{errors.answer}</Text>}
        
        <Button  onPress={handleSubmit} title='Add Card' disabled={!isValid} color={amber}/>
      </View>
    )
}