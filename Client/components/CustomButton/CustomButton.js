import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class CustomButton extends Component {
    render() {
        const { buttonText } = this.props
        return (
            <TouchableOpacity style={styles.loginBtnContainer}>
                <Text style={styles.loginBtnText}>{buttonText}</Text>
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

