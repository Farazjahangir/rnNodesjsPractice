import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


export default class CustomInput extends Component {
    render() {
        const {label, isSecure=false} = this.props
        return (
            <View>
            <Item floatingLabel>
                <Label style={styles.inputLabel}>{label}</Label>
                <Input  secureTextEntry={isSecure}  />
            </Item>
        </View>
)
    }
}

const styles = StyleSheet.create({
    inputLabel: {
        color: '#ffffffba'
    },
});

