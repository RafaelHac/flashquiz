import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { QUESTION_SIDE } from '../utils/helpers';
import { globalStyles, CustomButton, gray, orange } from '../utils/globalLayout';
import { connect } from 'react-redux';

class CardContent extends Component{
    render(){
        const { card, quiz: {sideOfCard} } = this.props;
        return (
            <View >
                {(sideOfCard === QUESTION_SIDE) 
                    ? (<View>
                        <Text style={styles.cardText}>{card.question}</Text>
                        <Text style={styles.actionInfo}> Click to see the answer! </Text>
                    </View>)
                    : (<View>
                        <Text style={styles.cardText}> {card.answer}</Text>
                        <Text style={styles.actionInfo}> Click to see the question again! </Text>
                    </View>)
                }
            </View>
        );
    };
};

function mapStateToProps({quiz}, {card}){
    const { sideOfCard } = quiz;
    return {
        card,
        quiz
    };
};

export default connect(mapStateToProps)(CardContent);

const styles = StyleSheet.create({
    cardText: {
        fontSize: 40,
        paddingTop: 20,
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    actionInfo: {
        fontSize: 20,
        color: orange,
        alignSelf: 'center'
    }
});