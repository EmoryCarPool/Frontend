import React, {useState, useContext, useEffect} from "react";
import {View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Timeslot from "../components/FindPassenger/Timeslot";

const FindPassenger2Screen = () => {

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <View style={styles.topContainer}>    
                <Text style={styles.mainText}>Find Passenger</Text>
                <Text style={styles.subText}>Select a Time</Text>
                <View style={styles.timeslotContainer}>
                    <Timeslot/>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

FindPassenger2Screen.navigationOptions = {
    title: 'Find Passenger',
    tabBarIcon: <FontAwesome name= 'handshake-o' size= {30} color= 'black'/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(152,190,196, 1)',
    },

    topContainer: {
        height: '100%',
        width: '83%',
        alignItems: 'center',
        paddingTop: '20%',
    },

    timeslotContainer: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: "100%",
        height: "80%",
        marginTop: 5,

        borderWidth: 5,
        borderColor: 'rgba(0,0,0,1)'

    },

    mainText: {
        fontSize: 48,
        textAlign: 'center',
        fontWeight: '800',
        color: 'black',
        paddingBottom: 20,
    },

    subText: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: '800',
        color: 'black',
        paddingBottom: 5,
    },

});

export default FindPassenger2Screen;