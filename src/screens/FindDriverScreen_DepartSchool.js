import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/Signup/BasicButton";
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from "react-native-vector-icons/Ionicons"
import {Context as FPContext} from "../context/FPContext";
import { navigate } from "../navigationRef";

const FindDriverScreen_DepartSchool = ({ navigation }) => {
    const {state, postPassRequest, loadTimeslot, getSelectedRequest, getMaxPrice, postDriverRequest,} = useContext(FPContext);
    
    const [errorMessage, setErrorMessage] = useState('');
    const [destination, setDestination] = useState('');
    const [numPeople, setNumPeople] = useState(0);
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [showTimePicker, setShowTimePicker] = useState(null);
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');
    const [endingPickUpTime, setEndingPickUpTime] = useState([]);
    const locations = ["Goizueta Business School", "Asbury Circle Emory", "Woodpec Emory", "Woodruff Circle Emory", "Raoul Hall Emory",
    "Harris Hall Emory", "Woodruff Hall Emory", "The Depot by Kaldi's Coffee Emory"];
    const numPassenger = [1, 2, 3, 4];
    const pickUPTime = ["12:00AM", "12:30AM", "01:00AM", "01:30AM",
        "02:00AM", "02:30AM", "03:00AM", "03:30AM", "04:00AM", "04:30AM",
        "05:00AM", "05:30AM", "06:00AM", "06:30AM", "07:00AM", "07:30AM",
        "08:00AM", "08:30AM", "09:00AM", "09:30AM", "10:00AM", "10:30AM",
        "11:00AM", "11:30AM", "12:00PM", "12:30PM", "01:00PM", "01:30PM",
        "02:00PM", "02:30PM", "03:00PM", "03:30PM", "04:00PM", "04:30PM",
        "05:00PM", "05:30PM", "06:00PM", "06:30PM", "07:00PM", "07:30PM",
        "08:00PM", "08:30PM", "09:00PM", "09:30PM", "10:00PM", "10:30PM",
        "11:00PM", "11:30PM"]

    var time_index_start = '';

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };
    // const getEndingTime = (index_1) 

    const pressSubmit = async () => {
        let from = changetoArmyTime(selectedStartTime)
        let to = changetoArmyTime(selectedEndTime)
        
        // const myData = {
        //     time: selectedStartTime + " - " + selectedEndTime,
        //     location: location, 
        //     destination: destination, 
        //     numPeople: numPeople
        // }

        // const requestData = JSON.stringify(myData)
        // await AsyncStorage.setItem('requestedRideInfo', requestData)

        postPassRequest({from, to, location, destination, numPeople})
    }

    const changetoArmyTime = (timeStr) => {
        let hours = parseInt(timeStr.slice(0, 2));
        const minutes = parseInt(timeStr.slice(3, 5));
        const period = timeStr.slice(5);
    
        if (period === 'PM' && hours !== 12) {
            hours += 12;
        } else if (period === 'AM' && hours === 12) {
            hours = 0;
        }
    
        return (hours * 100) + minutes;
    }

    useEffect(() => {
        // Populate endingPickUpTime array when selectedStartTime changes
        if (selectedStartTime !== '') {
            const startIndex = pickUPTime.indexOf(selectedStartTime);
            const endIndex = Math.min(startIndex + 6, pickUPTime.length - 1);
            setEndingPickUpTime(pickUPTime.slice(startIndex+1, endIndex + 1));
        }
    }, [selectedStartTime]);

    return (
        //<SafeAreaView forceInset={{ top: 'always'} }>
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>

           {/* Source Used: https://www.npmjs.com/package/react-native-select-dropdown*/}

                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={{alignItems: 'center',}}>
                        <View style={{flexDirection: 'row', alignSelf: 'flex-start',}}>
                            <TouchableOpacity style={{marginTop: '10%', flexDirection: 'row', marginBottom: '3%'}} onPress={() => {navigate('SetDepart')}}>
                                <Ionicons
                                    name='ios-arrow-back'
                                    size={35}
                                    color='black'
                                />
                                <Text style={{fontSize: 15, fontWeight: '700', marginLeft: 5, alignSelf: 'center'}}>Go back</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                        
                        <Text style={{fontSize: 48, fontWeight: '800'}}>Find Driver</Text>
                    </View>
                    
                    <Text style={styles.title_1}>
                        1. Select a time
                    </Text>

                <Text style={{ flexDirection: "row", fontSize: 15, paddingLeft: '10%', paddingRight: '15%',textAlign: 'center' }}>
                        Starting Time                                Ending Time
                </Text>

                <View style={{ flexDirection: "row" }}>

                    <SelectDropdown
                        data={pickUPTime}
                        buttonStyle={styles.dropdownButton_time}
                        buttonTextStyle={styles.dropdownButtonText}
                        dropdownStyle={{ borderRadius: 20 }}
                        renderDropdownIcon={() => <Ionicons name="caret-down-outline" color={'rgba(0,0,0,0.6)'} size={25} />}
                        onSelect={(selectedItem, index) => {
                            setSelectedStartTime(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item_1, index) => {
                            return item_1
                        }}
                    />

                    <Text style={{
                        textAlign: 'center', justifyContent: 'center', paddingTop: '6%', paddingLeft: '5%',
                        paddingRight: '6%', fontWeight: '10%'
                    }}>
                        ~
                    </Text>

                    <SelectDropdown
                        data={endingPickUpTime}
                        buttonStyle={styles.dropdownButton_time}
                        buttonTextStyle={styles.dropdownButtonText}
                        dropdownStyle={{ borderRadius: 20 }}
                        renderDropdownIcon={() => <Ionicons name="caret-down-outline" color={'rgba(0,0,0,0.6)'} size={25} />}
                        onSelect={(selectedItem, index) => {
                            setSelectedEndTime(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item_2, index) => {
                            return item_2
                        }}
                    />
                    </View>                           

                    <Text style={styles.subtitle}>
                        2. Pick up location
                    </Text>
                <View style={styles.mainContainer}>
                    <SelectDropdown
                        data={locations}
                        buttonStyle={styles.dropdownButton}
                        buttonTextStyle={styles.dropdownButtonText}
                        dropdownStyle={{ borderRadius: 20 }}
                        renderDropdownIcon={() => <Ionicons name="caret-down-outline" color={'rgba(0,0,0,0.6)'} size={25} />}
                        onSelect={(selectedItem, index) => {
                            setLocation(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    /> 
                    </View>

                    <Text style={styles.subtitle}>
                        3. Destination
                    </Text>

                    <View style={styles.mainContainer}>
                    
                        <BasicInputs
                            value={destination}
                            setValue={setDestination}
                            fontSize={12}
                    />
                    </View>

                    <Text style={styles.subtitle}>
                        4. How many?
                    </Text>

                <View style={styles.mainContainer}>
                    <SelectDropdown
                        data={numPassenger}
                        buttonStyle={styles.dropdownButton}
                        buttonTextStyle={styles.dropdownButtonText}
                        dropdownStyle={{ borderRadius: 20 }}
                        renderDropdownIcon={() => <Ionicons name="caret-down-outline" color={'rgba(0,0,0,0.6)'} size={25} />}
                        onSelect={(selectedItem, index) => {
                            setNumPeople(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        
                    />
                </View>

                    <View style={styles.submitContainer}>
                        <BasicButton
                            text='Submit'
                        onPress={pressSubmit}
                        />
                        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
       // </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(152,190,196, 1)'
    },
    safeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        flexGrow: 1,
    },
    timeContainer: {
        alignItems: 'center',
        paddingTop: '5%',
        length:'0%'
    },
    title: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '900',
        color: 'black',
        paddingTop: '20%',
        marginRight: '50%'
    },
    title_1: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '900',
        color: 'black',
        paddingTop: '10%',
        marginRight: '30%'
    },
    subtitle: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '900',
        color: 'black',
        paddingTop: '5%'
    },
    submitContainer: {
        alignItems: 'center',
        width: '65%',
        paddingLeft: "30%",
        paddingTop: "5%",
        paddingBottom: "5%"
    },
    mainContainer: {
        alignItems: 'center',
        paddingTop: "5%", 
    },
    dropdownButton: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        width: 345,
        height: 65,
        marginTop: 5,

        alignItems: 'center'
    },
    dropdownButton_time: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        width: 165,
        height: 65,
        marginTop: 5,
        marginLeft: 5,
        paddingLeft:'5%',
        alignItems: 'center'
    },

    dropdownButtonText: {
        fontSize: 24,
        fontWeight: '700',
        color: "rgba(0,0,0,0.6)",
        width: "100%",
    },

    errorMessage: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(255,0,0,0.7)',
        marginTop: 5,
    }

});

export default FindDriverScreen_DepartSchool;