import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';

class CardList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.screenTitle,
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
  });
  
  state = {
    ready: false,
  };

  renderItem = ({ item }) => {
    return <Card card={item} deckTitle={this.props.deckTitle}/>
  };

  _keyExtractor = (item, index) => item.question;

  render() {
    const { cards } = this.props;
    return (
      <View style = {{ marginBottom: 10}}>
          {cards.length
            ? <FlatList
              data={cards}
              renderItem={this.renderItem}
              keyExtractor={this._keyExtractor}
            />
          : <Text>No cards registered</Text>}
      </View>
    )
  }
}

function mapStateToProps ({ decks }, props){
  const { deckTitle } = props.navigation.state.params;

  return {
    cards: decks[deckTitle].questions,
    deckTitle
  };
};

export default connect(mapStateToProps)(CardList);