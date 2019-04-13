import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { object, string, required } from 'yup';
import { globalStyles, gray, amber } from '../utils/globalLayout';

export const validationSchema = object({
  title: string("Enter Title of Post")
      .required("Title is required")
});

export const DeckForm = (props) => {
    const {
      values: { title },
      errors,
      touched,
      handleSubmit,
      handleBlur,
      handleChange,
      isValid,
      setFieldTouched,
    } = props;
    return (
      <View style={globalStyles.item}>
        <Text style={{marginTop:10, color: gray}}>Title</Text>
        <TextInput
          value={title}
          helperText={touched.title ? errors.title : ""}
          error={touched.title && Boolean(errors.title)}
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          placeholder={`Input here the deck's title`}
          errorMessage={touched.title && errors.title ? errors.title : undefined}
          fullWidth
        />
        {errors.title &&
        <Text style={{ fontSize: 12, color: 'red' }}>{errors.title}</Text>}
        <Button  onPress={handleSubmit} title='Add Deck' disabled={!isValid} color={amber}/>  
      </View>
    )
}