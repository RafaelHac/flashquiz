import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { amber, orange, white } from './utils/globalLayout'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import {handleLoadDecks} from './actions/decks';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import HomeScreen from './components/HomeScreen';





class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <HomeScreen/>
      </Provider>
    )
  }
}

export default App;