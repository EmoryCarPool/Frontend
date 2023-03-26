import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import BasicButton from "../components/HomeScreen/BasicButton";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import Popup from "../components/Signup/Popup/Popup";
import { navigate } from "../navigationRef";
import { Context as FPContext} from "../context/FPContext"
import AsyncStorage from "@react-native-async-storage/async-storage";

const PendingRide = ({navigation}) => {
    const [imageUri, setImageUri] = useState(null);
    const [time, setTime] = useState('');
    const [departLocation, setDepartLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [passenger, setPassenger] = useState('');
    const [driveTime, setDriveTime] = useState('');
    const [cost, setCost] = useState('');

    const { state, loadDriverRequest, deleteDriverRequest} = useContext(FPContext)

    function militaryTo12HrTime(militaryTime) {
        // Split the military time string into hours and minutes
        const time = militaryTime.toString()
        const digits = time.length
        if (digits === 4) {
            const hours = parseInt(time.substring(0, 2));
            const minutes = time.substring(2);
      
        // Determine whether it's AM or PM based on the hours
            const amOrPm = hours >= 12 ? 'PM' : 'AM';
      
        // Convert the hours to 12-hour time
            const twelveHour = hours % 12 || 12;
      
        // Combine the hours, minutes, and AM/PM into a formatted string
            const twelveHourTime = `${twelveHour}:${minutes} ${amOrPm}`;
      
            return twelveHourTime;
        } else if (digits == 3) {
            const hours = parseInt(time.substring(0, 1));
            const minutes = time.substring(1);
              
            const twelveHour = hours % 12 || 12;
            const twelveHourTime = `${twelveHour}:${minutes} AM`;
              
            return twelveHourTime
        } else if (digits === 2 ) {
            return '12:30 AM'
        } else if (digits === 1) {
            return '12:00 AM'
        }
        
    }

    const onPressDelete = () => {
        deleteDriverRequest()
        // navigate to pending Ride Empty
    }

    useEffect(() => {
        const getData = async () => {
            await loadDriverRequest()
            await AsyncStorage.getItem('driverRequestData')
                .then(data => {
                    const parsedData = JSON.parse(data)
                    setTime(militaryTo12HrTime(parsedData[0].time_of_pickup))
                    setDepartLocation(parsedData[0].pick_up)
                    // setDestination()
                    // setPassenger()
                    // setDriveTime()
                    setCost(parsedData[0].price)

                })
                .catch(error => {
                    console.log(error)
                })
        };
        getData();
    }, []);

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

                        <View style={{ flexDirection: "row", paddingTop: '5%', marginRight: 90}}>
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

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='hourglass'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {driveTime}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='logo-usd'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold', paddingBottom:'30%'}}>
                                {cost}
                            </Text>
                        </View>
                    </View>
                    {/* <BasicButton
                    text='Delete Request'
                    onPress={() => navigate('SetDepart')}
                    /> */}
                    <TouchableOpacity onPress={onPressDelete} style={styles.deleteButton}>
                        <Text style={styles.deleteText}>Delete Request</Text>
                    </TouchableOpacity>
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
        marginBottom: '10%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
        // borderWidth: 5,
        // borderColor: 'black',
        width: '90%'



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

    deleteButton: {
        backgroundColor: 'rgba(255,0,0, 0.7)',
        width: '50%',
        marginLeft: '5%',

        paddingHorizontal: 10,
        paddingVertical: 15,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },
    deleteText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(0,0,0,1)'
    }
});

export default PendingRide;