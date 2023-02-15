// this is the main SigninScreen file that takes all compoments together

import React from "react";
import {View, StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-elements"
import PasswordInput from "../components/Signin/PasswordInput";
import EmailInput from "../components/Signin/EmailInput";

const SigninScreen = ({navigation}) => {

    return (
        <ImageBackground style= {{width: '100%', height: '100%',}} source={require('../../assets/atlantaBackground.png')}>
            <KeyboardAvoidingView 
                style={{flex: 1}}
                behavior='position'
            >
                <View style={styles.mainContainer}>
                    <EmailInput/>
                    <PasswordInput/>
                    
                    <Button
                        buttonStyle={{
                            backgroundColor: '#98BEC4'
                        }}
                        
                        title= "Login"
                        titleStyle={{
                            marginVertical: 8,
                            fontSize: 24,
                            fontWeight: '700',
                            
                        }}
                        containerStyle={{
                            width: '85%',
                            borderRadius: 20,
                            marginBottom: 10, 
                        }}
                        // onPress={() => navigation.navigate()}
                    />
                </View>
                
                <View style= {styles.subContainer}>
                    <Button
                        type='clear' 
                        title= "Create Account"
                        titleStyle={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: 'white'
                        }}
                        containerStyle={{
                            marginLeft: '6%',
                            marginRight: '20%'
                        }}
                        onPress={() => navigation.navigate('Signup')}
                    />

                    <Button
                        type='clear'
                        title= "Forgot Password?"
                        titleStyle={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: 'white'
                        }}
                        containerStyle={{
                        }}
                        onPress={() => navigation.navigate('ResetPasswordVerify')}
                    />
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: '130%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    subContainer: {
        flexDirection: 'row'
    },
});

export default SigninScreen;