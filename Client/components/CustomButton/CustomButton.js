import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class CustomButton extends Component {
    render() {
        const { buttonText, btnContainer, btnText } = this.props
        
        return (
            <TouchableOpacity style={[styles.loginBtnContainer , btnContainer]}>
                <Text style={[styles.loginBtnText, btnText]}>{buttonText}</Text>
            </TouchableOpacity>
)
    }
}

const styles = StyleSheet.create({
    loginBtnContainer: {
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#e74c3c',
        padding: 7,
        borderRadius: 10
    },
    loginBtnText: {
        color: '#fff',
        fontSize: 16
    },
});

