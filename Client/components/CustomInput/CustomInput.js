import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


export default class CustomInput extends Component {
    render() {
        const {label, isSecure=false, inputContainerStyle ,  labelStyle, inputStyle} = this.props

        return (
            <View>
            <Item floatingLabel style={inputContainerStyle}>
                <Label style={[styles.inputLabel, labelStyle]}>{label}</Label>
                <Input  secureTextEntry={isSecure} style={[styles.inputText ,  inputStyle]}  />
            </Item>
        </View>
)
    }
}

const styles = StyleSheet.create({
    inputLabel: {
        color: '#ffffffba'
    },
    inputText:{
        color: '#ffffffba'
    }
});

