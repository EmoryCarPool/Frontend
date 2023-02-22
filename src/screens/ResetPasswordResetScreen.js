import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from "react-native";
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/Signup/BasicButton";
import Popup from "../components/Signup/Popup/Popup";
import Ionicons from "react-native-vector-icons/Ionicons"

const ResetPasswordResetScreen = ({navigation }) => {
    const [password, setPassword] = useState('');
    const [confirm_new_password, set_new_password] = useState('');
    const [visible, setVisible] = useState(false)

    const checkPassword = () => {
      //  console.log(password)
      //  console.log(confirm_new_password)
        
        if (password !== confirm_new_password || password.length === 0) {
            setVisible(true);
        } else {
            navigation.navigate('Signin')
        } 
    }

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
                <Text style={styles.TextPopUp}>The password does not match!</Text>
              
            </Popup>


            <ScrollView style={styles.scrollContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.Title}>
                        Reset Password
                    </Text>
                </View>

                <View style={styles.mainContainer}>
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
        paddingTop: "40%",
        //marginLeft: '1%'
        }

});

export default ResetPasswordResetScreen;