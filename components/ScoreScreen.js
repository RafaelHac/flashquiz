import React, {Component} from 'react';
import { View, Text, BackHandler, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation  } from 'react-navigation';
import { connect } from 'react-redux';
import { globalStyles, CustomButton, orange, red, green } from '../utils/globalLayout';
import { resetQuiz } from '../actions/quiz';

class ScoreScreen extends Component{
    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props){
        super(props);
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        )
    };

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
          BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
      }
    
    onBackButtonPressAndroid = () => {
        const {returnKey} = this.props.navigation.state.params;
        if (returnKey) {
            this.returnToDeckScreen();
            return true;
        } else {
            return false;
        }
    };
    
    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
        this.props.dispatch(resetQuiz(this.props.deckTitle));
    }

    handlePress = () => {
        this.returnToDeckScreen();
    };

    returnToDeckScreen = () => {
        const { navigation } = this.props;
        navigation.goBack(navigation.state.params.returnKey);
    }

    handleNewQuiz = () => {
        const { navigation, deckTitle } = this.props;
        
        navigation.goBack(navigation.state.params.returnKey);
        navigation.navigate('Quiz', {deckTitle});
       
    }
    
    render() {
        const {cards, quiz:{correctAnswers}} = this.props;
        const score = (correctAnswers*100)/cards.length;
        return (
            <View style={{...globalStyles.item, alignItems:'center', marginBottom:10, flex: 1}}>
                <View style={{ flex:4 , justifyContent:'center' }}>
                    <Text style={styles.scoreLabel}>Score: 
                        <Text style={(score >= 75)
                            ?styles.highScore
                            :(score < 50) ? styles.lowScore : styles.scoreLabel}>{`${score}%`}
                        </Text>
                    </Text>
                </View>
                <View style={{ flex:1, flexDirection:'column' }}>
                    <CustomButton styles={{ backgroundColor:red }} label='Return to Deck' onPress={this.returnToDeckScreen}/>
                    <CustomButton styles={{ backgroundColor:green }} label='New Quiz' onPress={this.handleNewQuiz}/>
                </View>
            </View>
        );
    };
};

function mapStateToProps({decks, quiz}, props){
    const {deckTitle} = props.navigation.state.params;
    const cards = decks[deckTitle].questions;
    
    return{
        quiz,
        deckTitle,
        cards
    }
}

export default connect(mapStateToProps)(ScoreScreen);

const styles = StyleSheet.create({
    scoreLabel: {
        fontSize: 40,
        paddingTop: 20,
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    lowScore: {
        fontSize: 40,
        paddingTop: 20,
        color: red,
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    highScore: {
        fontSize: 40,
        paddingTop: 20,
        color: green,
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    actionInfo: {
        fontSize: 20,
        color: orange,
        alignSelf: 'center'
    }
});