import React, {useState, useContext} from "react";
import {View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput, Alert} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import { Context as FPContext } from "../../context/FPContext"

const PassRequestList = ({array}) => {
    const {state, postDriverRequest} = useContext(FPContext)

    const [time, setTime] = useState('');
    const [departLocation, setDepartLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [passenger, setPassenger] = useState(''); 

    const [expandedIndex, setExpandedIndex] = useState(-1);
    
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <FlatList
            data={array}
            renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => toggleExpand(index)}>
                    <View style={styles.container}>

                        <View style={{ flexDirection: "row", paddingTop: '5%'}}>
                            <Ionicons
                                style={{paddingLeft: '13%'}}
                                name='alarm'
                                size={25}
                                color='black'
                            />
                            <Text style={{justifyContent: 'center', paddingLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                                {item.from + " - " + item.to}
                            </Text>
                        </View>

                        {/* <Text style={styles.infoText}>{item.from + " - " + item.to}</Text> */}
                        
                        {expandedIndex === index && (
                            <>
                                <View style={styles.inputContainer}>
                                    <FontAwesome name='dollar' size={32} color='black' />
                                    <TextInput
                                        style={styles.priceInput}
                                        maxLength={5}
                                        textAlign='center'
                                        placeholder="Price"
                                        placeholderTextColor={'rgba(0,0,0, 1)'}
                                        value={selectedPrice}
                                        onChangeText={text => setSelectedPrice(text)}
                                        keyboardType={'numeric'}
                                    />
                        
                                    <FontAwesome name='clock-o' size={36} color='black' />
                                    <SelectDropdown
                                        data={timeArray()}
                                        defaultButtonText='Time'
                                        buttonStyle={styles.dropdownInput}
                                        buttonTextStyle={{fontSize: 20}}
                                        dropdownStyle={{borderRadius: 5 }}
                                        onSelect={(selectedItem, index) => {
                                            setTime(selectedItem)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                    />
                        
                                    <TouchableOpacity onPress={onPressedSubmit}>
                                        <View style={styles.button}>
                                            <Text style={{ fontSize: 20, color: 'rgba(0,0,0,0,1)' }}>Submit</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                {state.errorMessage && (
                                    <View style={{ marginTop: 5, flexDirection: "column" }}>
                                        <Text style={styles.errorMessage}>Error: {state.errorMessage}</Text>
                                    </View>
                                )}
                            </>
                        )}
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    );
      
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    infoText: {
        fontSize: 20,
        fontWeight: 'normal'
    },

    inputContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },

    priceInput: {
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 5,
        marginHorizontal: 5,
        height: 50,
        width: "20%",
        backgroundColor:'rgba(255,255,255, 0.5)',
        fontSize: 20,
    },

    dropdownInput: {
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 5,
        marginRight: 5,
        height: 50,
        width: "35%",
        backgroundColor: 'rgba(255,255,255, 0.6)',
    },

    button: {
        borderWidth: 2,
        borderColor: "#ccc",
        backgroundColor: "rgba(255,255,255,1)",
        marginLeft: 5,
        borderRadius: 5,
        height: 50,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center'
    },

    errorMessage: {
        fontSize: 18,
        fontWeight: '700',
        color: 'rgba(255,0,0,0.7)',
        marginTop: 5,
        textAlign: 'center'
    }
    
});

export default PassRequestList;