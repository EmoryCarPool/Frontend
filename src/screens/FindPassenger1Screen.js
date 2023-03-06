import React, {useState, useContext, useEffect} from "react";
import {View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SelectDropdown from 'react-native-select-dropdown';
import BasicInputs from "../components/Signup/BasicInputs";
import Ionicons from "react-native-vector-icons/Ionicons"
import Timeslot from "../components/FindPassenger/Timeslot";


const FindPassenger1Screen = () => {
    const numPassenger = ["1", "2", "3", "4"];
    const [finalDestination, setFinalDestination] = useState('');
    const [maxCap, setMaxCap] = useState('')

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.topContainer}>    
                    <Text style={styles.mainText}>Find Passenger</Text>
                    <Text style={styles.subText}>1. Input your final destination</Text>
                    <BasicInputs
                        placeholder='Final Destination'
                        value={finalDestination}
                        setValue={setFinalDestination}
                    />
                    <Text style={styles.subText}>2. Maximum Capacity</Text>
                    <SelectDropdown
                        data={numPassenger}
                        buttonStyle={styles.dropdownButton}
                        buttonTextStyle={styles.dropdownButtonText}
                        dropdownStyle={{borderRadius: 20 }}
                        renderDropdownIcon={() => <Ionicons name="caret-down-outline" color={'rgba(0,0,0,0.6)'} size={25}/>}
                        onSelect={(selectedItem, index) => {
                            //this will save the selectedItem to the variable maxCap that I initialized at line 13
                            setMaxCap(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                    <Text style={styles.subText}>3. Select a time</Text>
                    <View style={styles.timeslotContainer}>
                        <Timeslot/>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

FindPassenger1Screen.navigationOptions = {
    title: 'Find Passenger',
    tabBarIcon: <FontAwesome name= 'handshake-o' size= {30} color= 'black'/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(152,190,196, 1)',
    },

    scrollContainer: {
        flexGrow: 1,
    },

    topContainer: {
        alignItems: 'center',
        paddingTop: '20%',
    },

    mainText: {
        fontSize: 48,
        textAlign: 'center',
        fontWeight: '800',
        color: 'black',
        paddingBottom: '0%'
    },

    subText: {
        fontSize: 24,
        alignSelf: 'flex-start',
        marginLeft: '5%',
        fontWeight: '800',
        color: 'black',
        paddingTop: '5%',
    },

    dropdownButton: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20, 
        width: 345,
        height: 65,
        marginTop: 5,

        alignItems: 'center'
    },

    dropdownButtonText: {
        fontSize: 24,
        fontWeight: '700',
        color:"rgba(0,0,0,0.6)",
        width: "100%",
    },

    timeslotContainer: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: "90%",
        height: 350,
        marginTop: 5,

        borderWidth: 5,
        borderColor: 'rgba(0,0,0,1)'

    }
});

export default FindPassenger1Screen;