import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { globalStyles, gray, white, amber } from '../utils/globalLayout';
import { handleDeleteCard } from '../actions/decks';

class Card extends Component {
    handleDelete = () => {
        const { dispatch, deckTitle, card } = this.props;
        return dispatch(handleDeleteCard(deckTitle, card));
    }

    render(){
        const { card } = this.props;
        return (
            <View style={{...globalStyles.item, flexDirection: 'row'}}>
                <View style={{ flex:10 }}>
                    <Text style={styles.cardQuestion}>{card.question}</Text>
                    <Text style={styles.cardAnswer}> {`Answer: ${card.answer}`} </Text>
                </View>
                <View style={{ flex:1, alignSelf:'center'}}>
                    <TouchableOpacity onPress={this.handleDelete}>
                        {Platform.OS === 'ios' 
                            ? <Ionicons name='ios-trash' size={20} color={amber} />                      
                            : <FontAwesome name='trash' size={20} color={amber}/>}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps({decks}, {deckTitle, card}){
    return{
        deck: decks[deckTitle],
        deckTitle,
        card
    };
};

export default withNavigation(connect(mapStateToProps)(Card));

const styles = StyleSheet.create({
    cardQuestion: {
        fontSize: 20,
        paddingTop: 20,
        alignSelf: 'center'
    },
    cardAnswer: {
        fontSize: 10,
        paddingBottom: 10,
        color: gray,
        alignSelf: 'center'
      }
    
  })