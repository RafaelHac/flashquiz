import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { globalStyles, CustomButton, gray, orange } from '../utils/globalLayout';
import { connect } from 'react-redux';

class QuizStarter extends Component{
    
    hasCards = () => {
        const { decks, deckTitle} = this.props;
        return decks[deckTitle].questions.length > 0;
    };

    handlePress = () => {
        if(this.hasCards()){
            this.startQuiz();
        } else{
            this.addCards();
        }
    };

    addCards = () => {
        const { deckTitle } = this.props;
        this.props.navigation.navigate(
            'NewCard',
            { deckTitle }
        );
    };

    startQuiz = () => {
        const { deckTitle } = this.props;
        this.props.navigation.navigate(
            'Quiz',
            { deckTitle, screenTitle: `${deckTitle}: Quiz` }
        );
    }
    
    render(){
        const { decks, deckTitle } = this.props;
        const deck = decks[deckTitle];
        return (
            <TouchableOpacity style={{...globalStyles.item, flex: 4, alignItems:'center'}} onPress={this.handlePress}>
                <View >
                    <Text style={this.hasCards() ? styles.quizText : styles.quizNoCardsText}>Quiz</Text>
                    {this.hasCards()
                        ? <View>
                            <Text style={styles.deckInfo}>{`${deck.questions.length} question(s)`}</Text>
                            <Text style={styles.actionInfo}> Click here to start quiz </Text>
                        </View>
                        : <View>
                            <Text style={styles.actionInfo}> There are no cards on this deck!</Text>
                            <Text style={styles.actionInfo}> Click here to add a card </Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        );
    };
};

function mapStateToProps({decks}, props){
    const { deckTitle } = props.navigation.state.params;
    return {
        decks,
        deckTitle
    }
}

export default withNavigation(connect(mapStateToProps)(QuizStarter));

const styles = StyleSheet.create({
    quizText: {
        fontSize: 60,
        paddingTop: 20,
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    quizNoCardsText: {
        fontSize: 60,
        paddingTop: 20,
        color: gray,
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    deckInfo: {
        fontSize: 12,
        paddingBottom: 10,
        color: gray,
        alignSelf: 'center'
    },
    actionInfo: {
        fontSize: 20,
        color: orange,
        alignSelf: 'center'
    }
});