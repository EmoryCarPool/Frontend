import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import BaseContainer from "./BaseContainer"

const Timeslot = () => {


    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.mainContainer}>
                <BaseContainer
                    time='12:00AM - 12:30AM'
                    numRequests={1}
                />
                <BaseContainer
                    time='12:30AM - 1:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='1:00AM - 1:30AM'
                    numRequests={3}
                />
                <BaseContainer
                    time='1:30AM - 2:00AM'
                    numRequests={4}
                />
                <BaseContainer
                    time='2:00AM - 2:30AM'
                    numRequests={5}
                />
                <BaseContainer
                    time='2:30AM - 3:00AM'
                    numRequests={4}
                />
                <BaseContainer
                    time='3:00AM - 3:30AM'
                    numRequests={3}
                />
                <BaseContainer
                    time='3:30AM - 4:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='4:00AM - 4:30AM'
                    numRequests={1}
                />
                <BaseContainer
                    time='4:30AM - 5:00AM'
                    numRequests={5}
                />
                <BaseContainer
                    time='5:00AM - 5:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='5:30AM - 6:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='6:00AM - 6:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='6:30AM - 7:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='7:00AM - 7:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='7:30AM - 8:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='8:00AM - 8:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='8:30AM - 9:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='9:00AM - 9:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='9:30AM - 10:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='10:00AM - 10:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='10:30AM - 11:00AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='11:00AM - 11:30AM'
                    numRequests={2}
                />
                <BaseContainer
                    time='11:30AM - 12:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='12:00PM - 12:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='12:30PM - 1:00PM'
                    numRequests={1}
                />
                <BaseContainer
                    time='1:00PM - 1:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='1:30PM - 2:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='2:00PM - 2:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='2:30PM - 3:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='3:00PM - 3:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='3:30PM - 4:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='4:00PM - 4:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='4:30PM - 5:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='5:00PM - 5:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='5:30PM - 6:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='6:00PM - 6:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='6:30PM - 7:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='7:00PM - 7:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='7:30PM - 8:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='8:00PM - 8:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='8:30PM - 9:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='9:00PM - 9:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='9:30PM - 10:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='10:00PM - 10:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='10:30PM - 11:00PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='11:00PM - 11:30PM'
                    numRequests={2}
                />
                <BaseContainer
                    time='11:30PM - 12:00AM'
                    numRequests={2}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },

    mainContainer: {
        alignItems: 'flex-end',
    }
})

export default Timeslot