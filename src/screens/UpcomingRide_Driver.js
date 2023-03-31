import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard, Animated, TextInput} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import BasicButton from "../components/HomeScreen/BasicButton";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import Popup from "../components/Signup/Popup/Popup";
import { navigate } from "../navigationRef";

const UpcomingRide_Driver = ({navigation}) => {
    const [passengerName, setPassengerName] = useState('Passenger Name');
    const [phoneNumber, setPhoneNumber] = useState('### - #### - ####'); 
    const [finalDestination, setFinalDestination] = useState('2532 N Dectaur Rd, Decatur, GA, 30033, USA');
    const [time, setTime] = useState('7:00PM');
    const [price, setPrice] = useState('#');
    const [additionalTime, setAdditionalTime] = useState('# min');
    const [numPass, setNumPass] = useState('#')
    const [code, setCode] = useState('')
    const [visible, setVisible] = useState(false)

    const onVerifyPressed = () => {
        console.log('Button pressed!');
    };

    const handleCodeChange = (text) => {
        setCode(text)
        if (text.length === 4) {
            Keyboard.dismiss();
        }
    }

    const [refresh, setRefresh] = useState(false)

    const onPressRefresh = () => {
        setRefresh(!refresh)
    }



    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <View style={{flex: 1, alignItems: 'center', height: '100%', width: '100%'}}>
                <View style={{ flexDirection: "row", marginBottom: '5%' }}>
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

                <View style={styles.titleContainer_1}>
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Ionicons
                            name='person'
                            size={25}
                            color='black'
                        />
                        <Text style={{ paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {passengerName}
                        </Text>
                    </View>
                    
                    
                    <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                        <Ionicons
                            name='call'
                            size={25}
                            color='black'
                        />
                        <Text style={{ paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {phoneNumber}
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                        <FontAwesome
                            name='flag-checkered'
                            size={25}
                            color='black'
                        />
                        <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {finalDestination}
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                        <Ionicons
                            name='alarm'
                            size={25}
                            color='black'
                        />
                        <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {time}
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                        <Ionicons
                            name='logo-usd'
                            size={25}
                            color='black'
                        />
                        <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {price}
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center'}}>
                        <Ionicons
                            name='ios-hourglass'
                            size={25}
                            color='black'
                        />
                        <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {additionalTime}
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: '5%', alignItems: 'center',}}>
                        <Ionicons
                            name='people'
                            size={25}
                            color='black'
                        />
                        <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                            {numPass}
                        </Text>
                    </View>

                    <View style={{paddingTop: '10%', alignItems: 'center', paddingBottom: '10%'}}>
                        <Text style={{fontSize: 15, fontWeight:'bold', paddingBottom: '5%'}}>Enter 4-digit confirmation code:</Text>
                        <TextInput
                            style={styles.codeInput}
                            keyboardType='numeric'
                            maxLength={4}
                            onChangeText={handleCodeChange}
                            value={code}
                        />
                        <TouchableOpacity onPress={onVerifyPressed} style={styles.verifyButton}>
                            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '700', color: 'rgba(0,0,0,1)'}}>Verify</Text>
                        </TouchableOpacity>
                    </View>


                </View>
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

    driverName: {
        fontSize: 32,
    },

    Title: {
        borderColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,

    },
    titleContainer_1: {
        paddingHorizontal: '15%',
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
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
        borderBottomColor: "black",
        color: "black",
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
        borderBottomColor: "lightgrey",
        color: "lightgrey",

    },

    codeInput: {
        width: '100%',
        height: '20%',
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'black',
        textAlign: 'center',
        letterSpacing: 15,
        fontSize: 20,
        marginBottom: '10%'
    },

    verifyButton: {
        backgroundColor: 'rgba(152,190,196, 1)',
        width: '100%',

        paddingHorizontal: 10,
        paddingVertical: 10,

        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    }


});

export default UpcomingRide_Driver;