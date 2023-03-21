import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard, Animated} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import BasicButton from "../components/HomeScreen/BasicButton";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import Popup from "../components/Signup/Popup/Popup";

const UpcomingRide_Passenger = ({navigation}) => {
    const [imageUri, setImageUri] = useState(null);
    const [driverName, setDriverName] = useState('Driver Name');
    const [phoneNumber, setPhoneNumber] = useState('### - #### - ####'); 
    const [carInfo, setCarInfo] = useState('White Nissan Altima');
    const [time, setTime] = useState('7:00PM');
    const [destination, setDestination] = useState('Goizueta Business School');
    const [venmo, setVenmo] = useState('9999');
    const [visible, setVisible] = useState(false)
    const [venmoCode, setVenmoCode] = useState('');
    const animatedValue = useRef(new Animated.Value(0)).current;
    const onPressButton = () => {
        console.log('Button pressed!');
  };

    useEffect(() => {
        if (venmoCode.length === 4) {
            Keyboard.dismiss();
        }
    }, [venmoCode]);

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

                <Popup visible={visible}>
                    <View style={{ alignItems: 'flex-end', paddingBottom: '20%' }}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Ionicons
                                style={{ paddingLeft: '90%', }}
                                name='close'
                                size={35}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.TextPopUp}>Please enter the 4-digit code sent to your Emory email</Text>
                    <PopUpInput
                        placeholder='Enter 4-digit code'
                        value={venmoCode}
                        setValue={setVenmoCode}
                        fontSize={18}
                        keyboardType={'numeric'}
                    />
                    {/* change the onPress prop so that it checks the code */}
                    <PopUpButton text={'Confirm'} onPress={() => navigation.navigate('ResetPasswordReset')} />
                </Popup>

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
                                name='call'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {phoneNumber}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='car'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {carInfo}
                            </Text>
                        </View>

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
                                name='checkmark'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {venmo}
                            </Text>
                        </View>
                    </View>
                    <BasicButton
                    text='Start Ride'
                    onPress={() => setVisible(true)}
                    /> 

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Animated.View
                            style={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'blue',
                            transform: [{ scale: animatedValue }],
                            }}
                        >
                            <TouchableOpacity onPress={onPressButton}>
                            <BasicButton
                                text='test'
                                onPress={() => setVisible(true)}
                                /> 
                            </TouchableOpacity>
                        </Animated.View>
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
});

export default UpcomingRide_Passenger;