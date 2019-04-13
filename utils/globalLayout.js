import React from 'react';
import { StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';

export const purple = '#292477';
export const gray = '#757575';
export const green = '#009688';
export const white = '#fff';
export const red = '#b71845';
export const yellow = '#ffca28';
export const amber = '#ffb300';
export const orange = '#ff9800';
export const blue = '#4e4cb8';
export const lightPurp = '#7c53c3';
export const pink = '#b93fb3';

export const globalStyles = StyleSheet.create({
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
        }
    },
    iosBtn: {
        backgroundColor: amber,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
      },
      AndroidBtn: {
        backgroundColor: amber,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 5,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
      },
});

export function CustomButton ({label, onPress, styles}){
    const btnStyles = (Platform.OS === 'ios') ? globalStyles.iosBtn : globalStyles.AndroidBtn;
    return (
        <TouchableOpacity
            style={{ ...btnStyles, ...styles }}
            onPress={onPress}>
                <Text style={globalStyles.btnText}>{label}</Text>
        </TouchableOpacity>
    )
}