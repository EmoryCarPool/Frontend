import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import BasicButton from "../components/HomeScreen/BasicButton";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import Popup from "../components/Signup/Popup/Popup";

const RequestedRide = ({navigation}) => {
    const [imageUri, setImageUri] = useState(null);
    const [time, setTime] = useState('6:00 PM - 9:00PM');
    const [departLocation, setDepartLocation] = useState('Goizueta Business School');
    const [destination, setDestination] = useState('855 Emory Point Dr');
    const [passenger, setPassenger] = useState('3 Passenger'); 
    const [visible, setVisible] = useState(false)
    const [driverName, setDriverName] = useState('Driver Name');

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

                <View style={styles.titleContainer_1}>
                    <View style={styles.textContainer}>
                        <View style={styles.imgContainer}>
                            <Image source={imageUri ? { uri: imageUri }: defaultProfilePic}
                            style={styles.picImg} />
                        </View>
                        <Text style={styles.DriverName}>
                            {driverName}
                        </Text>
                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='alarm'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {time}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='navigate'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {departLocation}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='flag'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {destination}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='people'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {passenger}
                            </Text>
                        </View>
                    </View>
                    <BasicButton
                    text='Edit Request'
                    onPress={() => navigation.navigate('SetDepart')}
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
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        flexGrow: 1,
    },

    DriverName: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },

    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    picImg: {
        width: 150,
        height: 150,
        borderRadius: 100

    },

    Title: {
        borderColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,



    },
    titleContainer_1: {
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: '100%',
        marginTop: '0%',
        marginBottom: '10%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',


    },

    textContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '10%',
        marginBottom: '10%',

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
        borderBottomColor: "black",
        color: "black",

    },
    pendingRide: {
        paddingTop: '10%',
        paddingLeft: '2%',
        paddingRight: '2%',
        borderBottomWidth: 5,
        fontWeight: 'bold',
        borderBottomColor: "lightgrey",
        color: "lightgrey",

    },
});

export default RequestedRide;