import React, {Component} from 'react';
import { View, Text, BackHandler, TouchableOpacity } from 'react-native';
import { shuffle, QUESTION_SIDE, ANSWER_SIDE } from '../utils/helpers';
import { setLocalNotification, clearLocalNotification } from '../utils/notifications';
import { globalStyles, CustomButton, red, green } from '../utils/globalLayout';
import { connect } from 'react-redux';
import CardContent from './CardContent';
import { 
    nextCard, 
    flipCard, 
    correctAnswer, 
    wrongAnswer, 
    resetQuiz 
} from '../actions/quiz';

class Quiz extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.deckTitle}: Quiz`,
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
      });

    componentDidMount() {
        this.props.dispatch(resetQuiz(this.props.deckTitle));
    }

    handleEndQuiz = () => {
        const { deckTitle, navigation } = this.props;
        clearLocalNotification()
            .then(setLocalNotification)
        navigation.navigate(
            'ScoreScreen',
            { deckTitle, returnKey: navigation.state.key }
        )
    }

    shouldComponentUpdate(){
        return true;
    }

    handleFlipCard = () => {
        this.props.dispatch(flipCard());
    };

    handleWrongAnswer = () => {
        this.props.dispatch(wrongAnswer());
        this.props.dispatch(nextCard());
    }

    handleCorrectAnswer = () => {
        this.props.dispatch(correctAnswer());
        this.props.dispatch(nextCard());
    }
    
    render(){
        const { currentCard, sideOfCard } = this.props.quiz;
        const { quizCards } = this.props;
        
        return (
            <View style={{...globalStyles.item, alignItems:'center', marginBottom:10, flex: 1}}>
                {quizCards[currentCard] 
                ? <TouchableOpacity style={{ flex:6, justifyContent:'center' }} onPress={() => this.handleFlipCard()}>
                        <CardContent card={quizCards[currentCard]}/>
                    </TouchableOpacity>
                : this.handleEndQuiz()}
                <View style={{ flex:1, flexDirection:'row' }}>
                    <CustomButton styles={{ backgroundColor:red }} label='Wrong' onPress={this.handleWrongAnswer}/>
                    <CustomButton styles={{ backgroundColor:green }} label='Correct' onPress={this.handleCorrectAnswer}/>
                </View>
            </View>
        );
    };
}

function mapStateToProps({ decks, quiz }, props){
    const { deckTitle } = props.navigation.state.params;
    const quizCards = decks[deckTitle].questions;
    return {
        quizCards,
        deckTitle,
        quiz
    }
}

export default connect(mapStateToProps)(Quiz)