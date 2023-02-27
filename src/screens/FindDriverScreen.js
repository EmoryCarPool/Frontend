import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/Signup/BasicButton";
import SelectDropdown from 'react-native-select-dropdown';

const FindDriverScreen = ({ navigation }) => {
    const [destination, setDestination] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [showTimePicker, setShowTimePicker] = useState(null);
    const locations = ["Goizueta Business School", "Asbury Circle", "Woodpec", "Woodruff Circle", "Raoul Circle", "Kaldi's by Depot",
        "Harris hall"];
    const numPassenger = ["1", "2", "3", "4"];
    const pickUPTime = ["12:00AM - 12:30AM", "12:30AM - 01:00AM", "01:00AM - 01:30AM", "01:30AM - 02:00AM",
        "02:00AM - 02:30AM", "02:30AM - 03:00AM", "03:00AM - 03:30AM", "03:30AM - 04:00AM", "04:00AM - 04:30AM", "04:30AM - 05:00AM",
        "05:00AM - 05:30AM", "05:30AM - 06:00AM", "06:00AM - 06:30AM", "06:30AM - 07:00AM", "07:00AM - 07:30AM", "07:30AM - 08:00AM",
        "08:00AM - 08:30AM", "08:30AM - 09:00AM", "09:00AM - 09:30AM", "09:30AM - 10:00AM", "10:00AM - 10:30AM", "10:30AM - 11:00AM",
        "11:00AM - 11:30AM", "11:30AM - 12:00PM", "12:00PM - 12:30PM", "12:30PM - 01:00PM", "01:00PM - 01:30PM", "01:30PM - 02:00PM",
        "02:00PM - 02:30PM", "02:30PM - 03:00PM", "03:00PM - 03:30PM", "03:30PM - 04:00PM", "04:00PM - 04:30PM", "04:30PM - 05:00PM",
        "05:00PM - 05:30PM", "05:30PM - 06:00PM", "06:00PM - 06:30PM", "06:30PM - 07:00PM", "07:00PM - 07:30PM", "07:30PM - 08:00PM",
        "08:00PM - 08:30PM", "08:30PM - 09:00PM", "09:00PM - 09:30PM", "09:30PM - 10:00PM", "10:00PM - 10:30PM", "10:30PM - 11:00PM",
        "11:00PM - 11:30PM", "11:30PM - 12:00AM"]

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    return (
        //<SafeAreaView forceInset={{ top: 'always'} }>
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.title}>
                    1. Select a time
                    </Text>
                    <View style={styles.timeContainer}>

                    <SelectDropdown
                        data={pickUPTime}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    /> 

                    {/*Code that I tried first. Left it commented cuz felt like I may be able to apply it somewhere in our project*/}
                    {/*<TouchableOpacity onPress={() => setShowTimePicker(true)}>*/}
                    {/*    <Text> Select Time</Text>*/}
                    {/*    <DateTimePickerModal*/}
                    {/*        isVisible={showTimePicker}*/}
                    {/*        mode="time"*/}
                    {/*        onConfirm={(time) => {*/}
                    {/*            handleTimeSelect(time);*/}
                    {/*            setShowTimePicker(false);*/}
                    {/*        }}*/}
                    {/*        onCancel={() => setShowTimePicker(false)}*/}
                    {/*    />*/}
                    {/*</TouchableOpacity>*/}
                    
                    
                    </View>

                    <Text style={styles.subtitle}>
                        2. Pick up location
                    </Text>
                <View style={styles.mainContainer}>
                    <SelectDropdown
                        data={locations}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
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
                        style={{borderRadius: 20, borderColor: "blue"} }
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
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
                            //onPress={checkPassword}
                        />
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
    subtitle: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: '900',
        color: 'black'
    },
    submitContainer: {
        alignItems: 'center',
        width: '65%',
        paddingLeft: "30%",
        paddingTop: "5%",
    },
    mainContainer: {
        alignItems: 'center',
        paddingTop: "5%",
       
        
    }

});

export default FindDriverScreen;
