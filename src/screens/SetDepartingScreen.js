import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import BasicButton from "../components/BasicButton";

const SetDepartingScreen = ({ navigation }) => {

    const [checkValue_S, setCheckValue_S] = useState(false);
    const [checkValue_H, setCheckValue_H] = useState(false);

    const navigateS = () => {
        navigation.navigate('FindDriverS')
    }

    const navigateH = () => {
        navigation.navigate('FindDriverH')
    }

    return (
    <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
        <View style={styles.container}>
            <View style={styles.textbox}>
                <Text styles={styles.title}>
                    Select your departing location
                </Text>
            </View>

                

                <BasicButton
                    text='I am departing from Emory'
                    onPress={navigateS}
                />

                <BasicButton
                    text='I am departing from home'
                    onPress={navigateH}
                />

            
            </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        margin: 30
    },
    title: {
        alignItems: 'center',
        fontSize: 35,
        fontWeight: '700'
    },
    textbox: {
        alignItems: 'center',
        paddingBottom: '10%',
        }
})

export default SetDepartingScreen;
