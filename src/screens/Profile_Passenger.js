import React, { useState, useEffect, useContext } from "react";
import { View, Button, Image, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import BasicButton from "../components/ProfilePage/BasicButton";
import * as ImagePicker from 'expo-image-picker';
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext} from '../context/AuthContext'
import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile_Passenger = ({ navigation }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    // var test = await AsyncStorage.getItem('profileEmail')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const { state, signout, loadProfile, updateProfile } = useContext(AuthContext)

    useEffect(() => {
        const getData = async () => {
            await loadProfile()
            await AsyncStorage.getItem('profileInfo')
                .then(data => {
                    const parsedData = JSON.parse(data)
                    setEmail(parsedData.email)
                    setName(parsedData.first_name)
                    setPhoneNumber(parsedData.phone_number)
                })
                .catch(error => {
                    console.log(error)
                })
        };
        getData();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // setImageUri(result.assets[0].uri);
            setImageUri(result.uri)
            console.log("imageUri : ", imageUri)
        }
    };

    const handleEditPress = () => {
        setIsEditable(true);
    };

    const handleSavePress = async () => {
        await updateProfile({email, name, phoneNumber})
        var error = await AsyncStorage.getItem('updateError')
        
        if (error === '' || error === null) {
            setIsEditable(false);
        }
    };

    const handleCancelPress = () => {
        setIsEditable(false);
    };

    /// Name
    const handleNameChange = (newName) => {
        setName(newName);
    };

    /// Phone Number
    const handlePhoneNumberChange = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber);
    };

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.mainContainer}>
                    
                    <View style={styles.editIconContainer}>
                        <TouchableOpacity onPress={pickImage}>
                            <Ionicons
                                name='pencil-sharp'
                                size={25}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.picContainer}>
                        {imageUri ? (
                            <View style={styles.imgContainer}>
                                <Image 
                                    source={{ uri: imageUri }} 
                                    style={styles.picImg} 
                                />
                            </View>
                        ) : (
                            <View style={styles.imgContainer}>
                                <Image
                                    source={imageUri ? { uri: imageUri } : defaultProfilePic}
                                    style={styles.picImg}
                                />
                            </View>
                        )}
                    </View>

                    <View style={styles.emailContainer}>
                        <Text style={styles.emailText}>{email}</Text>
                    </View>
                    
                    {isEditable ? (
                        <View style={styles.editContainer}>
                            <TextInput 
                                value={name} 
                                onChangeText={handleNameChange}
                                style={styles.emailText}
                            />     
                        </View>                     

                    ) : (
                        <View style={styles.editContainer}>
                            <Text style={styles.emailText}>{name}</Text> 
                        </View>
                    )}

                    {isEditable ? (
                        <View style={styles.supportingContainer}>
                            <View style={styles.editContainer}>
                                <TextInput 
                                    value={phoneNumber} onChangeText={handlePhoneNumberChange}
                                    style={styles.emailText}
                                />
                            </View>

                            <View style={styles.editButtonContainer}>
                                {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
                                <BasicButton
                                    onPress={handleSavePress} text="Save"
                                />
                                <BasicButton
                                    onPress={handleCancelPress} text="Cancel"
                                />
                            </View>
                        </View>


                    ) : (

                        <View style={styles.supportingContainer}>
                            <View style={styles.editContainer}>
                                <Text style={styles.emailText}>{phoneNumber}</Text>
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


                    <View style={styles.buttonContainer}>
                        <BasicButton
                            text="Become a driver"
                            onPress={() => navigation.navigate('BecomeDriver')}
                        />
                        
                        <BasicButton
                            text="Change Password"
                            onPress={() => navigation.navigate('ChangePassword_Verify')}
                        />
                        
                        <BasicButton
                            text="Sign out"
                            onPress={signout}
                        />
                    </View>


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

    mainContainer: {
        maxWidth:'100%', 
        borderWidth: 5, 
        borderColor: 'white',
    },

    editIconContainer: {
        alignItems: 'flex-end', 
        paddingTop: '20%',
    },

    picContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '20%',
    },

    picImg: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },

    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    emailContainer: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 20,
        padding: 10,
        marginTop: '10%',
        width: '80%',
        alignSelf: 'center'
    },

    editContainer: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 20,
        padding: 10,
        marginTop: '5%',
        width: '80%',
        alignSelf: 'center'

    },

    supportingContainer: {

    },

    emailText: {
        fontSize: 20,
        fontWeight: "700",
        color: 'black',
        textAlign: 'center',
    },

    editButtonContainer: {
        width: '60%',
        alignSelf: 'center',
        paddingTop: '5%'
        
    },

    buttonContainer: {
        paddingTop: '10%',
        alignSelf: 'center',
        width: '80%'
    },

    errorMessage: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(255,0,0,0.7)',
        marginTop: 5,
        textAlign: 'center'
    }
    
});

export default Profile_Passenger;