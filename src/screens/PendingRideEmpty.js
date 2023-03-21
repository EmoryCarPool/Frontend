import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView } from "react-native";

const PendingRideEmpty = () => {
    const [name, setName] = useState('Name shown here');

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <ScrollView style={styles.scrollContainer}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.upcomingRide}>
                        Upcoming Ride
                    </Text>

                    <Text style={styles.requestRide}>
                        Requested Ride
                    </Text>

                    <Text style={styles.pendingRide}>
                        Pending Ride
                    </Text>
                </View>

                <View style={styles.titleContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.Title}>
                            For Drivers only:
                        </Text>
                        <Text></Text>
                        <Text style={styles.Title}>
                            Go to "Find Passenger"
                        </Text>
                    </View>
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
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        flexGrow: 1,
    },

    Title: {
        borderColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,



    },
    titleContainer: {
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

        height: '100%',
        //flexDirection: 'column',
        //width: '100%',
        marginTop: '20%',
        marginBottom: '65%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',


    },

    textContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '30%',
        marginBottom: '20%',

    },

    upcomingRide: {
        paddingTop: '10%',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderBottomWidth: 5,
        borderBottomColor: "lightgrey",
        color: "lightgrey",
        fontWeight: 'bold',
    },
    requestRide: {
        paddingTop: '10%',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderBottomWidth: 5,
        fontWeight: 'bold',
        borderBottomColor: "lightgrey",
        color: "lightgrey",

    },
    pendingRide: {
        paddingTop: '10%',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderBottomWidth: 5,
        fontWeight: 'bold',
        borderBottomColor: "black",
        color: "black",

    },
});

export default PendingRideEmpty;