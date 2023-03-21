import React, { useState, useEffect } from "react";
import { View, Button, Image, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/ProfilePage/BasicButton";
import * as ImagePicker from 'expo-image-picker';
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import { useNavigation } from '@react-navigation/native';


const Profile_Passenger = ({ navigation }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [name, setName] = useState('Name shown here');
    const [email, setEmail] = useState('Email shown here');
    const [phoneNumber, setPhoneNumber] = useState('Phone Number shown here');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    const handleEditPress = () => {
        setIsEditable(true);
    };

    const handleSavePress = () => {
        setIsEditable(false);
    };

    const handleCancelPress = () => {
        setIsEditable(false);
    };

    /// Name
    const handleNameChange = (newName) => {
        setName(newName);
    };

    /// Email
    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    };

    /// Phone Number
    const handlePhoneNumberChange = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber);
    };

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <ScrollView style={styles.scrollContainer}>

                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={pickImage}>
                        <Ionicons
                            style={{ paddingRight: '25%', marginTop: '1%'}}
                            name='pencil-sharp'
                            size={25}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.picContainer}>
                    
                    {imageUri ? (
                        <View style={styles.imgContainer}>
                            <Image source={{ uri: imageUri }} style={styles.picImg} />
                        </View>
                    ) : (
                        <View style={styles.imgContainer}>
                                <Image
                                    source={imageUri ? { uri: imageUri } : defaultProfilePic}
                                    style={styles.picImg}
                                />
                        </View>)}
                </View>
                
                <View style={styles.subContainer}> 
                    <Text style={[styles.showEmail, { borderRadius: 20, borderWidth: 1, borderColor: 'white', }]}>
                        {email} 
                    </Text>
                </View>

                <View style={styles.example}>
                    {isEditable ? (
                        <View style = {styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <TextInput value={name} onChangeText={handleNameChange}
                                    style={[styles.showInfo,{borderRadius: 20, borderWidth: 1, borderColor: 'black'}]}
                                />
                            </View>
                            <View style={styles.subContainer}>
                                </View>
                            </View>
                        

                    ) : (
                            <View style={styles.mainContainer}>
                                <View style={styles.subContainer}>
                                    <Text style={styles.showInfo}>{name}</Text>
                                </View>

                                <TouchableOpacity onPress={handleEditPress}>
                                </TouchableOpacity>
                        </View>
                    )}

                    {isEditable ? (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <TextInput value={phoneNumber} onChangeText={handlePhoneNumberChange}
                                    style={[styles.showInfo, { borderRadius: 20, borderWidth: 1, borderColor: 'black' }]}
                                />
                            </View>
                            <View style={styles.subContainer}>
                                <BasicButton
                                    onPress={handleSavePress} text="Save"
                                />
                                <BasicButton
                                    onPress={handleCancelPress} text="Cancel"
                                />
                            </View>
                        </View>


                    ) : (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.showInfo}>{phoneNumber}</Text>
                            </View>

                                <TouchableOpacity onPress={handleEditPress}>
                                    <Ionicons
                                        style={{ paddingLeft: '90%', }}
                                        name='pencil-sharp'
                                        size={25}
                                        color='black'
                                    />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                <View style={styles.bottomContainer}>
                    <BasicButton
                        text="Become a driver"
                        onPress={() => navigation.navigate('BecomeDriver')}
                    />
                </View>

                <View style={styles.ChangePassword}>
                    <BasicButton
                        text="Change Password"
                        onPress={() => navigation.navigate('ChangePassword_Verify')}
                    />
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
        backgroundColor: 'rgba(152,190,196, 1)'
    },

    scrollContainer: {
        flexGrow: 1,
    },

    picContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    picImg: {
        width: 200,
        height: 200,
        borderRadius: 100

    },

    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    mainContainer: {
        paddingTop: '1%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    subContainer: {
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '60%',
    },

    showInfo: {
        fontSize: 20,
        fontWeight: "700",
        color: 'black',
        width: '120%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "white",
        width: '150%',
        marginRight: '20%',
        marginLeft: '20%',
        textAlign: 'center'
    },

    showEmail: {
        fontSize: 20,
        fontWeight: "700",
        color: 'black',
        width: '150%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "white",
        marginRight: '10%',
        marginLeft: '75%',
        textAlign: 'center'
    },

    topContainer: {
        alignItems: 'center',
        paddingTop: '20%',
    },

    bottomContainer: {
        alignItems: 'center',
        paddingTop: '10%',
    },

    ChangePassword: {
        alignItems: 'center',
        paddingTop: '2%',
    },

    example: {
        paddingTop: '10%'
    },

    TextPopUp: {
        fontWeight: '700',
        textAlign: 'center',
        width: '85%',
    }

});

export default Profile_Passenger;