import React, {useState, useContext, useEffect} from "react";
import {View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context as FPContext } from "../../../context/FPContext"
    
    // UPDATE DESIGN FOR TEXT INPUTS
    // 한번 input할때 keyboard 지워지는거 고치기
    // const price, time_of_pickup 인풋 시간으로 update하기
    // FindPassenger3Screen에서 selected time 받아오기

const RequestsList = ({array}) => {
    const {postDriverRequest} = useContext(FPContext)
    
    
    const [expandedIndex, setExpandedIndex] = useState(-1);
    
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };
    
    const [expanded, setExpanded] = useState(false);
    const [price, setPrice] = useState(0);
    const [time_of_pickup, setTime_of_pickup] = useState(0);

    console.log("requestArray: ", array)

    const onPressedSubmit = () => {
        
        const findDriver_id = array[expandedIndex].findDriver_id
        const pick_up = array[expandedIndex].pick_up
        const pass_dest = array[expandedIndex].pass_dest
        const driver_current = array[expandedIndex].driver_current
        const driver_dest = array[expandedIndex].driver_dest
        const max_price = array[expandedIndex].max_price
        const min_price = array[expandedIndex].min_price
        const additional_time = array[expandedIndex].additional_time
        const price = 1
        const time_of_pickup = 2140
        
        postDriverRequest({findDriver_id, pick_up, pass_dest, driver_current, driver_dest, max_price, min_price, additional_time, price, time_of_pickup})
    }

    const ListItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => toggleExpand(index)}>
            <View style={styles.container}>
                <Text style={styles.text}>Pick up location: {item.pick_up}</Text>
                <Text style={styles.text}>Passenger destination: {item.pass_dest}</Text>
                <Text style={styles.text}>Min price: {item.min_price}</Text>
                <Text style={styles.text}>Max price: {item.max_price}</Text>
                <Text style={styles.text}>Additional Time: {item.additional_time} min</Text>
                {expandedIndex === index && (
                <View style={styles.inputContainer}>
                    <FontAwesome name= 'dollar' size={40} color= 'black'/>
                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                    />
                    <Ionicons name= 'time' size={43} color= 'black'/>
                    <TextInput
                        style={styles.input}
                        placeholder="Time"
                        value={time_of_pickup}
                        onChangeText={(text) => setTime_of_pickup(text)}
                    />
                    <TouchableOpacity onPress={onPressedSubmit}>
                        <View style={styles.button}>
                            <Text>Submit</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={array}
            renderItem={({ item, index }) => <ListItem item={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    inputContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        // justifyContent: "space-between",
    },

    input: {
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
        height: 40,
        width: 50,
        color:"rgba(0,0,0,0.6)",
    },

    button: {
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 5,
        height: 40,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});

export default RequestsList;