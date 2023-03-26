import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import BasicButton from "../components/HomeScreen/BasicButton";
import PopUpButton from "../components/Signup/Popup/PopUpButton";
import PopUpInput from "../components/Signup/Popup/PopUpInput";
import Popup from "../components/Signup/Popup/Popup";
import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context as FPContext} from "../context/FPContext"
import PassRequestList from "../components/HomeScreen/PassRequestList"

const RequestedRide = ({navigation}) => {
    const [imageUri, setImageUri] = useState(null);
    const [time, setTime] = useState('');
    const [departLocation, setDepartLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [passenger, setPassenger] = useState(''); 
    const [visible, setVisible] = useState(false)

    const { state, loadPassRequest} = useContext(FPContext)

    var dataArray = [];

    useEffect(() => {
        const getData = async () => {
            await loadPassRequest()
            await AsyncStorage.getItem('passRequestData')
                .then(data => {
                    const parsedData = JSON.parse(data)
                    dataArray = parsedData
                })
                .catch(error => {
                    console.log(error)
                })
        };
        getData();
    }, []);

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            {/* <ScrollView style={styles.scrollContainer}> */}
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
                        {/* {dataArray ? <PassRequestList array={dataArray}/>: null} */}

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
                    onPress={() => navigate('SetDepart')}
                    />
                </View>
            {/* </ScrollView> */}
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