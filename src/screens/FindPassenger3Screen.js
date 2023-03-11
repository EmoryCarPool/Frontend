import React, {useState, useContext, useEffect} from "react";
import {View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Context as FPContext } from "../context/FPContext"
import AsyncStorage from "@react-native-async-storage/async-storage";
import RequestsList from "../components/FindPassenger/FP3/RequestsList";

const FindPassenger3Screen = () => {
    const [array, setArray] = useState([])
    // const [requestArray, setRequestArray] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('array')
            .then(data => {
                const parsedData = JSON.parse(data);
                setArray(parsedData);
            })
            .catch(error => {
                console.log('AsyncStorage error:', error);
                // Handle the error here
            });
    }, []);

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <View style={styles.mainContainer}> 
                <Text style={styles.mainText}>All Requests:</Text>
                <Text style={styles.timeText}>06:00PM - 06:30PM</Text>
                {array ? <RequestsList array={array}/>: null}
            </View>
        </KeyboardAvoidingView>
    )
}

FindPassenger3Screen.navigationOptions = {
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
    
    mainContainer: {
        height: '90%',
        width: '90%',
        marginTop: '10%',
    },

    scrollContainer: {
        flexGrow: 1,
    },

    mainText: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '800',
        color: 'black',
    },

    timeText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '800',
        color: 'black',
        paddingTop: 20,
        paddingBottom: 20,
    }
});

export default FindPassenger3Screen;