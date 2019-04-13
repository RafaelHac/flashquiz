import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar, Platform } from 'react-native';
import { orange, amber, white } from '../utils/globalLayout';
import { Constants } from 'expo'
import MainNavigator from './MainNavigator';
import { handleLoadDecks } from '../actions/decks';
import { resetQuiz } from '../actions/quiz';

function FlashQuizStatusBar ({backgroundColor, ...props}) {
    return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    )
  }

class HomeScreen extends Component{
    componentDidMount(){
        this.props.dispatch(handleLoadDecks());
        this.props.dispatch(resetQuiz());
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <FlashQuizStatusBar backgroundColor={orange} barStyle="light-content" />
                <MainNavigator />
            </View>
        );
    };
};

export default connect()(HomeScreen);