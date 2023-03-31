import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, Keyboard, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
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

    const [dataArray, setDataArray] = useState([]);
    const [refresh, setRefresh] = useState(false)

    const onPressRefresh = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        const getData = async () => {
            await loadPassRequest()
            await AsyncStorage.getItem('passRequestData')
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
            <View style={{flex: 1, alignItems: 'center', paddingBottom: '5%'}}>
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
                    <PassRequestList array={dataArray}/> : 
                    
                    <View style={{marginTop: '50%'}}>
                        <Text style={{fontStyle: 'italic', fontSize: 14}}>Make a request under the "Find Driver" tab</Text>
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