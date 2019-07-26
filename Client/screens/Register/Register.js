import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Right } from 'native-base';
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const { width , height } = Dimensions.get('window')

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.p6} onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text style={styles.signInText}>Signin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.p6}>
                    <Text style={styles.signupText}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.blackBg}></View>
                <Image blurRadius={20} source={require('../../assets/images/bg.jpg')} resizeMode="cover" style={styles.background} />
                <View style={styles.loginContainer}>
                    <CustomInput  label="Username" />
                    <CustomInput  label="Contact Number" inputContainerStyle={styles.marginY} keyboardType="phone-pad" />
                    <CustomInput  label="Password" isSecure={true} inputContainerStyle={styles.marginY} />
                    <CustomInput  label="Confirm Password" isSecure={true} inputContainerStyle={styles.marginY} />
                    <CustomButton buttonText="Register" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    blackBg :{
        width,
        height,
        backgroundColor: '#0000008f',
        position: 'absolute',
        zIndex: 1000

    },
    background : {
        width,
        height,
        position: 'absolute',
    },
    loginContainer: {
        justifyContent: 'center',
        flex: 1,
        width: '70%',
        alignSelf: 'center',
        zIndex: 20000
    },
    marginY: {
        marginTop: 20
    },
   p6: {
       padding: 6,
    },
    signupText: {
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#e74c3c',
        borderRadius: 20,
        width: 80,
        color: '#fff'
    },
     signInText: {
         textAlign: 'center',
         padding: 8,
        backgroundColor: '#fff',
         borderRadius: 20,
         width: 80,
     },
     btnContainer: {
         justifyContent: 'flex-end',
        zIndex: 2000,
        flexDirection: 'row'
     },
});
