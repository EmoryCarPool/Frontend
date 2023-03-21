import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";

const BaseContainer = ({ time, numRequests }) => {
    // const [opacity, setOpacity] = useState(0)

    // setOpacity(0 + (0.2 * numRequests))

    const opacity = (0.2 * numRequests)


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
            fontSize: 16,
            paddingLeft: 40,
            alignItems: 'center'
        },

        textContainer: {
            flex: 1,
            borderRightWidth: 5,
            borderRightColor: 'rgba(0,0,0,1)',
            padding: 5.8,
        },
    })

    return (
        <View style={styles.baseContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{time}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.timebox}></View>
            </TouchableOpacity>
        </View>
    )
}

export default BaseContainer