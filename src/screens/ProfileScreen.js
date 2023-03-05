import React, {useContext} from "react";
import {View, StyleSheet, Text} from "react-native";
import { Button } from 'react-native-elements'
import { Context as AuthContext} from '../context/AuthContext'
import { SafeAreaView } from "react-navigation"; // this will eliminate screen's contents to be cut off from the top
import Ionicons from "react-native-vector-icons/Ionicons"

const ProfileScreen = () => {
    const { signout } = useContext(AuthContext)
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>ProfileScreen</Text>
            <Button title='Sign out' onPress={signout}/>
        </SafeAreaView>
    )
}

ProfileScreen.navigationOptions = {
    title: 'Profile',
    tabBarIcon: <Ionicons name= 'md-person-circle-outline' size= {30} color= 'black'/>
}

const styles = StyleSheet.create({});

export default ProfileScreen;