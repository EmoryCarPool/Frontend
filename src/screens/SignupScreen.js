import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/Signup/BasicButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import Popup from "../components/Signup/Popup/Popup";

const SignupScreen = ({ navigation }) => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
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
        navigation.navigate('Signin') // and send all information inputs to database
    }

    const onConfirmPressed = () => {
        setVisible(false)
    }

    // close keyboard when Email Code input length is 4
    useEffect(() => {
        if (emailCode.length === 4) {
            Keyboard.dismiss();
        }
    }, [emailCode]);

    // close keyboard when phone number input length is 10
    useEffect(() => {
        if (phone_number.length === 10) {
            Keyboard.dismiss();
        }
    }, [phone_number]);

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
                <Text style={styles.TextPopUp}>Please enter the verification code sent to your Emory email</Text>
                <PopUpInput
                    placeholder='Enter verification code'
                    value={emailCode}
                    setValue={setEmailCode}
                    fontSize={12}
                    keyboardType={'numeric'}
                />
                {/* change the onPress prop so that it checks the code */}
                <PopUpButton text={'Confirm'} onPress={onConfirmPressed} />
            </Popup>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.topContainer}>
                    <BasicInputs
                        placeholder='First Name'
                        value={first_name}
                        setValue={setFirst_name}
                    />
                    <BasicInputs
                        placeholder='Last Name'
                        value={last_name}
                        setValue={setLast_name}
                    />

                    <BasicInputs
                        placeholder='Emory Email'
                        value={email}
                        setValue={setEmail}
                    />
                </View>
                <TouchableOpacity style={{ marginLeft: '70%' }} onPress={() => setVisible(true)}>
                    <Text style={styles.verifyEmailText}>Verify Email</Text>
                </TouchableOpacity>

                <View style={styles.bottomContainer}>
                    <BasicInputs
                        placeholder='Phone Number'
                        value={phone_number}
                        setValue={setPhone_number}
                        keyboardType={'numeric'}
                    />

                    <BasicInputs
                        placeholder='Password'
                        value={password}
                        setValue={setPassword}
                        secureTextEntry
                    />
                    <BasicInputs
                        placeholder='Re-enter Password'
                        value={re_password}
                        setValue={setRe_password}
                        secureTextEntry
                    />

                    <BasicButton
                        text='Complete'
                        onPress={onCompletePressed}
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
        paddingTop: '20%',
    },

    bottomContainer: {
        alignItems: 'center',
        paddingTop: '10%',
    },

    verifyEmailText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'rgba(0,0,0,0.6)'
    },

    TextPopUp: {
        fontWeight: '700',
        textAlign: 'center',
        width: '85%',
    }

});

export default SignupScreen;