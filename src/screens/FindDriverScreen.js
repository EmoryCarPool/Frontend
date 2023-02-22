import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/Signup/BasicButton";

const FindDriverScreen = ({ navigation }) => {
    const [destination, setDestination] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    return (
        //<SafeAreaView forceInset={{ top: 'always'} }>
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.title}>
                    1. Select a time
                    </Text>
                    <View style={styles.timeContainer}>
                        <BasicInputs
                        value={time}
                        setValue={setTime}
                        fontSize={12}
                        />
                    </View>

                    <Text style={styles.subtitle}>
                        2. Pick up location
                    </Text>
                    <View style={styles.mainContainer}>
                        <BasicInputs
                            value={location}
                            setValue={setLocation}
                            fontSize={12}
                        />
                    </View>

                    <Text style={styles.subtitle}>
                        3. Destination
                    </Text>

                    <View style={styles.mainContainer}>
                    
                        <BasicInputs
                            value={destination}
                            setValue={setDestination}
                            fontSize={12}
                    />
                    </View>

                    <Text style={styles.subtitle}>
                        4. How many?
                    </Text>

                    <View style={styles.mainContainer}>
                        <BasicInputs
                            value={numPeople}
                            setValue={setNumPeople}
                            fontSize={12}
                        />
                    </View>

                    <View style={styles.submitContainer}>
                        <BasicButton
                            text='Submit'
                            //onPress={checkPassword}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
       // </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(152,190,196, 1)'
    },
    safeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        flexGrow: 1,
    },
    timeContainer: {
        alignItems: 'center',
        paddingTop: '5%',
        length:'0%'
    },
    title: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '900',
        color: 'black',
        paddingTop: '20%',
        marginRight: '50%'
    },
    subtitle: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '900',
        color: 'black'
    },
    submitContainer: {
        alignItems: 'center',
        width: '65%',
        paddingLeft: "30%",
        paddingTop: "5%",
    },
    mainContainer: {
        alignItems: 'center',
        paddingTop: "5%",
    }

});

export default FindDriverScreen;