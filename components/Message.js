import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, gray, errorColor, successColor, red, green } from '../utils/globalLayout';
import { closeMessage, SUCCESS } from '../actions/message';

class Message extends Component {
    handleClose = () => {
        const { dispatch } = this.props;
        return dispatch(closeMessage());
    }

    render(){
        const { message } = this.props;
        console.log('type',message['messageType'])
        const messageStyle = (message['messageType'] === SUCCESS) ? styles.success : styles.error;
        if(message['messageType'] === undefined){
            return <View></View>
        }
        return (
            <View style={{...globalStyles.item, ...messageStyle ,flexDirection: 'row'}}>
                <View style={{ flex:10, ...styles.message }}>
                    <Text>{message.message}</Text>
                </View>
               
                <View style={{ flex:1, alignSelf:'flex-start'}}>
                    <TouchableOpacity onPress={this.handleClose}>
                        {Platform.OS === 'ios' 
                            ? <Ionicons name='ios-close' size={20} color={gray} />                      
                            : <Ionicons name='md-close' size={20} color={gray}/>}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps({message}){
    return{
        message
    };
};

export default connect(mapStateToProps)(Message);

const styles = StyleSheet.create({
    message: {
        fontSize: 12,
        alignSelf: 'center'
    },
    success: {
        backgroundColor: successColor,
        borderColor: green,
        borderWidth: 0.5,
    },
    error: {
        backgroundColor: errorColor,
        borderColor: red,
        borderWidth: 0.5
      }
  });