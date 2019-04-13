import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { globalStyles, gray, white, amber } from '../utils/globalLayout';
import { handleDeleteDeck } from '../actions/decks';

class Deck extends Component {
    handleDetails = () => {
        this.props.navigation.navigate(
            'DeckDetails',
            { deckTitle: this.props.title }
        )
    }

    handleDelete = () => {
        const { dispatch, title } = this.props;
        return dispatch(handleDeleteDeck(title));
    }

    render(){
        const { decks, title } = this.props;
        return (
            <View style={{...globalStyles.item, flexDirection: 'row'}}>
                <TouchableOpacity style={{ flex:10 }} onPress={this.handleDetails}>
                    <View>
                        <Text style={styles.deckTitle}>{title}</Text>
                        <Text style={styles.deckInfo}>{ decks[title].questions.length === 0 ? 'No cards saved!' : `${decks[title].questions.length} card(s)`}</Text>
                    </View>
                </TouchableOpacity>
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

function mapStateToProps({decks}, {title}){
    return{
        decks,
        title
    };
};

export default withNavigation(connect(mapStateToProps)(Deck));

const styles = StyleSheet.create({
    deckTitle: {
        fontSize: 20,
        paddingTop: 20,
        alignSelf: 'center'
    },
    deckInfo: {
        fontSize: 12,
        paddingBottom: 10,
        color: gray,
        alignSelf: 'center'
      }
    
  });