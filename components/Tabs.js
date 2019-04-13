import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { orange, amber, white } from '../utils/globalLayout';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import DeckList from './DeckList';
import NewDeck from './NewDeck';

const Tabs = TabNavigator({
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
      },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
        },
      }
  }, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? amber : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : amber,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

export default Tabs;