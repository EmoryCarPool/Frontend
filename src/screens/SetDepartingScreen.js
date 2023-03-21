import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BasicButton from "../components/SetLocation/BasicButton";



/*Source used: https://ssilook.tistory.com/entry/React-Native-RN-%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EB%B2%84%ED%8A%BC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0CheckBox*/

const SetDepartingScreen = ({ navigation }) => {

    const [checkValue_S, setCheckValue_S] = useState(false);
    const [checkValue_H, setCheckValue_H] = useState(false);

    const navigateS = () => {
        navigation.navigate('FindDriver_S')
    }

    const navigateH = () => {
        navigation.navigate('FindDriver_H')
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
                
            {/*<BouncyCheckbox*/}
            {/*    style={styles.checkbox}*/}
            {/*    size={25}*/}
            {/*    fillColor="darkcyan"*/}
            {/*    unfillColor="#FFFFFF"*/}
            {/*    text="I am departing from Emory"*/}
            {/*    iconStyle={{ borderColor: "red" }}*/}
            {/*        onPress={(isChecked: false) => {*/}
            {/*            setCheckValue_S(true)*/}
            {/*            setCheckValue_H(false)*/}
            {/*            console.log(checkValue_H + " departing home")*/}
            {/*            console.log(checkValue_S + " departing school")*/}
            {/*        }}*/}
            {/*/>*/}

            {/*<BouncyCheckbox*/}
            {/*        style={styles.checkbox}*/}
            {/*        size={25}*/}
            {/*        fillColor="darkcyan"*/}
            {/*        unfillColor="#FFFFFF"*/}
            {/*        text="I am departing from home"*/}
            {/*        iconStyle={{ borderColor: "red" }}*/}
            {/*        onPress={(isChecked: boolean) => {*/}
            {/*            setCheckValue_H(true)*/}
            {/*            setCheckValue_S(false)*/}
            {/*            console.log(checkValue_H + " departing home")*/}
            {/*            console.log(checkValue_S + " departing school")*/}
            {/*        }}*/}
            {/*/>*/}

            
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