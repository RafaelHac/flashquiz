import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { white, globalStyles } from '../utils/globalLayout';
import Deck from './Deck';
import Message from './Message';
import { handleLoadDecks } from '../actions/decks';
import { getNoDecksMessage } from '../utils/helpers';

class DeckList extends Component {
  state = {
    ready: false,
  }

  componentDidMount(){
    this.props.dispatch(handleLoadDecks());
  }

  renderItem = ({ item }) => {
    return <Deck title={item.title}/>
  }

  _keyExtractor = (item, index) => item.title;

  render() {
    const { decks } = this.props;
    return (
      <View style={{marginBottom:10}}>
        <Message/>
        {Object.keys(decks).length
          ? <FlatList
            data={Object.values(decks)}
            renderItem={this.renderItem}
            keyExtractor={this._keyExtractor}
          />
        : <View style={globalStyles.item}>
            <Text>{getNoDecksMessage()}</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
})

function mapStateToProps (state){
  return {
    decks: state.decks
  };
};

export default connect(mapStateToProps)(DeckList);