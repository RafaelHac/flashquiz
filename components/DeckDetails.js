import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { globalStyles, CustomButton } from '../utils/globalLayout';
import { connect } from 'react-redux';
import QuizStarter from './QuizStarter';

class DeckDetails extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.screenTitle,
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    });
    
    handleAddCards = () => {
        const { deckTitle } = this.props;
        this.props.navigation.navigate(
            'NewCard',
            { deckTitle }
        );
    }

    handleShowCards = () => {
        const { deckTitle } = this.props;
        console.log('details', this.props)
        this.props.navigation.navigate(
            'CardList',
            { deckTitle, screenTitle: `${deckTitle}: Card List` }
        );
    }

    render(){
        return (
            <View style={{flexDirection:'column', flex:1, marginBottom:17}}>
                <QuizStarter/>
                <View style={{...globalStyles.item, flex: 1, alignItems:'center'}}>
                    <View style={{ margin: 5 }}>
                        <CustomButton label={'Add Card'} onPress={this.handleAddCards}/>
                        <CustomButton label={'Cards'} onPress={this.handleShowCards}/>
                    </View>
                </View>
                
            </View>
        )
    }
}

function mapStateToProps ({ decks }, props){
    const { deckTitle } = props.navigation.state.params;
    return {
        deck: decks[deckTitle],
        deckTitle
    };
};

export default connect(mapStateToProps)(DeckDetails);