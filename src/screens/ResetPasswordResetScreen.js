import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from "react-native";
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/ResetPassword/BasicButton";
import Popup from "../components/Signup/Popup/Popup";
import Ionicons from "react-native-vector-icons/Ionicons"
import { Context as AuthContext } from "../context/AuthContext"
import { NavigationEvents } from 'react-navigation';

const ResetPasswordResetScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_new_password, set_new_password] = useState('');
    const [visible, setVisible] = useState(false)
    const [visibleSuccess, setVisibleSuccess] = useState(false)

    const { state, resetPassword, clearErrorMessage } = useContext(AuthContext);

    const checkPassword = () => {

        if (password !== confirm_new_password || password.length === 0) {
            setVisible(true);
        } else {
            state.errorMessage = ''
            resetPassword({ email, password })
        }
    }

    const onPressX = () => {
        navigation.navigate('Signin')
    }

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <NavigationEvents onWillFocus={clearErrorMessage} />

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
                <Text style={styles.TextPopUp}>The passwords do not match!</Text>

            </Popup>

            <Popup visibleSuccess={visibleSuccess}>
                <View style={{ alignItems: 'flex-end', paddingBottom: '20%' }}>
                    <TouchableOpacity onPress={onPressX}>
                        <Ionicons
                            style={{ paddingLeft: '90%', }}
                            name='close'
                            size={35}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.TextPopUp}>Password successfully updated!</Text>
            </Popup>


            <ScrollView style={styles.scrollContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.Title}>
                        Reset Password
                    </Text>
                </View>

                <View style={styles.mainContainer}>
                    <BasicInputs
                        title='Enter your email again'
                        placeholder='Enter your email again'
                        value={email}
                        setValue={setEmail}
                        fontSize={12}
                    />

                    <BasicInputs
                        title='New Password'
                        placeholder='New Password'
                        value={password}
                        setValue={setPassword}
                        fontSize={12}
                    />
                    <BasicInputs
                        title='Confirm New Password'
                        placeholder='Confirm New Password'
                        value={confirm_new_password}
                        setValue={set_new_password}
                        fontSize={12}
                    />
                </View>

                <View style={styles.mainContainer}>
                    <BasicButton
                        text='Update Password'
                        onPress={checkPassword}
                    />
                    {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
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
    titleContainer: {
        alignItems: 'center',
        paddingTop: '40%'
    },
    Title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '900',
        color: 'white'
    },
    mainContainer: {
        alignItems: 'center',
        paddingTop: "20%",
        //marginLeft: '1%'
    },

    errorMessage: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(255,0,0,0.7)',
        marginTop: 5,
    },

});

export default ResetPasswordResetScreen;