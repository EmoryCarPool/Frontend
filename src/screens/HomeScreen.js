import React from "react";
import {View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons"

const HomeScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>HomeScreen</Text>
        </SafeAreaView>
    )
}

HomeScreen.navigationOptions = {
    title: 'Home',
    tabBarIcon: <Ionicons name= 'home-outline' size= {30} color= 'black'/>
}

const styles = StyleSheet.create({});

export default HomeScreen;