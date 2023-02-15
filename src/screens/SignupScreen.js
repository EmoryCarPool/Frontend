import React from "react";
import {View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, } from "react-native";
import { Button } from "react-native-elements"
import BasicInputs from "../components/Signup/BasicInputs";
import EmailInput from "../components/Signup/EmailInput";
import PasswordInput from "../components/Signup/PasswordInput";

const SignupScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <BasicInputs title='First Name'></BasicInputs>
            <BasicInputs title='Last Name'></BasicInputs>
            <EmailInput></EmailInput>
            <BasicInputs title='Phone Number'></BasicInputs>
            <PasswordInput></PasswordInput>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        paddingTop: "50%"
    }
});

export default SignupScreen;