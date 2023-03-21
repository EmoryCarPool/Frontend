import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/Signup/BasicButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import Popup from "../components/Signup/Popup/Popup";

const ChangePassword_Verify = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_password] = useState('');
    const [emailCode, setEmailCode] = useState('');
    // this is for the popup screen component
    const [visible, setVisible] = useState(false)


    const onCompletePressed = () => {
        // put logic for:
        // 1) first and last name contains alphabet only
        // 2) if email was verified
        // 3) if phone number is valid
        // 4) if password == re-enter password
        navigation.navigate('Signup') // and send all information inputs to database
    }

    const onConfirmPressed = () => {
        navigation.navigate('ResetPasswordResetScreen')
        //setVisible(false)
    }

    // close keyboard when Email Code input length is 4
    useEffect(() => {
        if (emailCode.length === 4) {
            Keyboard.dismiss();
        }
    }, [emailCode]);

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <Popup visible={visible}>
                <View style={{ alignItems: 'flex-end', paddingBottom: '20%' }}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Ionicons
                            style={{ paddingLeft: '90%', }}
                            name='close'
                            size={35}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.TextPopUp}>Please enter the 4-digit code sent to your Emory email</Text>
                <PopUpInput
                    placeholder='Enter 4-digit code'
                    value={emailCode}
                    setValue={setEmailCode}
                    fontSize={18}
                    keyboardType={'numeric'}
                />
                {/* change the onPress prop so that it checks the code */}
                <PopUpButton text={'Confirm'} onPress={() => navigation.navigate('ChangePassword_Reset')} />
            </Popup>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.Title}>
                        Change Password
                    </Text></View>

                <View style={styles.textContainer}>
                    <Text style={styles.Notification}>
                    Enter your email Address and we will send you an email.
                    </Text></View>

                <View style={styles.bottomContainer}>
                    <Text style={{ textAlign: "center" }}>
                        If your email address matches an account, it will lead you to the page where you can reset your password.
                        If your email address does not match an account, you cannot change your password.
                    </Text></View>

                <View style={styles.topContainer}>
                    
                    <BasicInputs
                        placeholder='Emory Email'
                        value={email}
                        setValue={setEmail}
                        fontSize={12 }
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <BasicButton
                        text='Verify Email'
                        onPress={() => setVisible(true)}//navigation.navigate('FindDriver')}
                    />
                </View>

                {/* Delete this after checking */}
                <View style={styles.bottomContainer}>
                    <BasicButton
                        text='check'
                        onPress={() => navigation.navigate('ChangePassword_Reset')}
                    />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(152,190,196, 1)'
    },

    scrollContainer: {
        flexGrow: 1,
    },

    topContainer: {
        alignItems: 'center',
        paddingTop: '10%',
    },

    bottomContainer: {
        alignItems: 'center',
        paddingTop: '5%',
    },

    CreateAccountText: {
        fontSize: 13,
        paddingRight: '20%',
        fontWeight: '500',
        color: 'white'
    },

    LogInText: {
        fontSize: 13,
        fontWeight: '500',
        paddingLeft: '20%',
        color: 'white'
    },

    TextPopUp: {
        fontWeight: '700',
        textAlign: 'center',
        width: '85%',
    } ,

    textContainer: {
        alignItems: 'center',
        paddingTop: '10%'
    }, 
    titleContainer: {
        alignItems: 'center',
        paddingTop: '25%'
    }, 
    Notification: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '800'
    },
    Title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '900',
        color: 'white'
    }
});

export default ChangePassword_Verify;