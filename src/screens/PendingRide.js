import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
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

    const [dataArray, setDataArray] = useState([]);

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
        setDataArray([])
    }

    const [refresh, setRefresh] = useState(false)

    const onPressRefresh = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        const getData = async () => {
            await loadDriverRequest()
            await AsyncStorage.getItem('driverRequestData')
                .then(data => {
                    const parsedData = JSON.parse(data)
                    setDataArray(parsedData)

                })
                .catch(error => {
                    console.log(error)
                })
        };
        getData();
    }, [refresh]);

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <View style={{flex: 1, alignItems: 'center', height: '100%', width: '100%'}}>
                
                <View style={{ flexDirection: "row", marginBottom: '5%'}}>
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

                <TouchableOpacity style={{alignSelf: 'flex-end', paddingRight: '5%'}} onPress={onPressRefresh}>
                    <FontAwesome
                        name='refresh'
                        size={25}
                        color='black'
                    />
                </TouchableOpacity>

                {Array.isArray(dataArray) && dataArray.length > 0 ?

                <View style={styles.titleContainer_1}>
                    
                        <View style={{ flexDirection: "row", alignItems: 'center', paddingTop: '5%'}}>
                            <Ionicons
                                name='alarm'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {militaryTo12HrTime(dataArray[0].time_of_pickup)}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                            <Ionicons
                                name='navigate'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {dataArray[0].pick_up}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                            <Ionicons
                                name='flag'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {destination}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                            <Ionicons
                                name='people'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {passenger}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                            <Ionicons
                                name='hourglass'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {driveTime}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center', paddingBottom: '30%'}}>
                            <Ionicons
                                name='logo-usd'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {dataArray[0].price}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={onPressDelete} style={styles.deleteButton}>
                            <Text style={styles.deleteText}>Delete Request</Text>
                        </TouchableOpacity>

                    </View>

                    : 
                    
                    <View style={{marginTop: '50%'}}>
                        <Text style={{fontStyle: 'italic', fontSize: 14}}>For Drivers only: Make a request in Find Passenger</Text>
                    </View>
                    }
                    
            </View>
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
    titleContainer_1: {
        paddingHorizontal: '10%',
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
        width: '90%'



    },

    textContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
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
        width: '100%',

        paddingHorizontal: 10,
        paddingVertical: 15,

        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },
    deleteText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(0,0,0,1)'
    }
});

export default PendingRide;