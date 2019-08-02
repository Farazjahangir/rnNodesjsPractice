import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Right } from 'native-base';
import axios from 'axios'
import DropdownAlert from 'react-native-dropdownalert';

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import helpers from '../../config/helper'

const { width , height } = Dimensions.get('window')

export default class Login extends Component {
    state = {
        userName: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
        showAlert: true
    }
    static navigationOptions = {
        header: null
    }


    register = async () =>{
        const { userName, contactNumber, password, confirmPassword } = this.state
        // Errors Cases
        if(!userName) return this.dropDownAlertRef.alertWithType('error', 'Error', 'Username is required'); 
        if(!password) return this.dropDownAlertRef.alertWithType('error', 'Error', 'Password is required'); 
        if(password !== confirmPassword) 
            return this.dropDownAlertRef.alertWithType('error', 'Error', 'Passwords does not match'); 

        const body = {
            userName,
            contactNumber,
            password
        }
        try{
            const res = await helpers.fetchApi('/user/register' , body , 'post')
            this.dropDownAlertRef.alertWithType('success', 'Success', 'User Created');             
       }

       catch(e){
        this.dropDownAlertRef.alertWithType('error', 'Error', e);            
       }
    }
    
    render() {
        const { showAlert } = this.state
        return (
            <View style={styles.mainContainer}>
                 <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
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
                    <CustomInput  label="Username" onChange={(text)=> this.setState({ userName: text })} />
                    <CustomInput  label="Contact Number" inputContainerStyle={styles.marginY} keyboardType="phone-pad" onChange={(text)=> this.setState({ contactNumber: text })} />
                    <CustomInput  label="Password" isSecure={true} inputContainerStyle={styles.marginY} onChange={(text)=> this.setState({ password: text })} />
                    <CustomInput  label="Confirm Password" isSecure={true} inputContainerStyle={styles.marginY} onChange={(text)=> this.setState({ confirmPassword: text })} />
                    <CustomButton buttonText="Register" onPress={this.register} />
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
