import React, {useState, useContext, useEffect} from "react";
import {View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity} from "react-native";
import { Context as FPContext } from "../../context/FPContext"

const BaseContainer = ({time, numRequests}) => {    
    let opacity = (0.2 * numRequests)
    
    const {getSelectedRequest} = useContext(FPContext);

    const onPressedTimebox = () => {
        if (numRequests !== 0) {
            const inputTime = convertToMilitaryTime(time)
            getSelectedRequest({inputTime})
        }
    }

    function convertToMilitaryTime(inputString) {
        const startTime = inputString.slice(0, 7); // extract the start time from the input string
        let hour = parseInt(startTime.slice(0, 2)); // extract the hour component from the start time
        const minute = parseInt(startTime.slice(3, 5)); // extract the minute component from the start time
        const isPM = startTime.slice(5, 7) === 'PM'; // check if the start time is in the afternoon
        
        // adjust the hour component based on whether it's in the morning or afternoon
        if (hour === 12 && !isPM) {
            hour = 0;
        } else if (isPM && hour !== 12) {
            hour += 12;
        }
        
        // format the military time as a 4 digit integer
        const militaryTime = hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
        return parseInt(militaryTime);
    }

    const styles = StyleSheet.create({
        baseContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 5,
            borderColor: 'rgba(0,0,0,1)',
            flex: 1
        },
    
        timebox: {
            height: 50,
            width: 180,
            backgroundColor: `rgba(0,240,0,${opacity})`,
        },
    
        textStyle: {
            fontSize: 14,
            paddingLeft: 40,
            alignItems: 'center'
        },

        textContainer: {
            flex: 1,
            borderRightWidth: 5, 
            borderRightColor: 'rgba(0,0,0,1)',
            padding: 8.5,
        },

        requestText: {
            position: 'absolute',
            alignSelf: 'center',
            paddingTop: '8%',
            fontSize: 14,
        }
    })

    return (
        <View style={styles.baseContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{time}</Text>
            </View>
            <TouchableOpacity onPress={onPressedTimebox}>
            <View style={styles.timebox}></View> 
            <Text style={styles.requestText}>{numRequests} requests</Text>
            </TouchableOpacity>  
        </View>
    )
}

export default BaseContainer