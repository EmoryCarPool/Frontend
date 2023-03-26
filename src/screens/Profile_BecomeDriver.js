import React, { useState, useEffect, useContext } from "react";
import { View, Button, Image, StyleSheet, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from "react-native-vector-icons/Ionicons"
import BasicInputs from "../components/Signup/BasicInputs";
import BasicButton from "../components/ProfilePage/BasicButton";
import * as ImagePicker from 'expo-image-picker';
import defaultProfilePic from "../components/ProfilePage/default_profile_pic.png";
import { Context as AuthContext} from '../context/AuthContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";


const Profile_BecomeDriver = (navigation) => {
    const [isEditable, setIsEditable] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [occupation, setOccupation] = useState('Occupation')
    const [carBrand, setCarBrand] = useState('Car brand');
    const [carModel, setCarModel] = useState('Car model');
    const [color, setColor] = useState('Car color');
    const [email,setEmail] = useState('')
    const [plateNumber, setPlateNumber] = useState('Plate number');
    const occupationArray = ['Student', 'Faculty']
    const [didSave, setDidSave] = useState(false)
    const [localErrorMessage, setLocalErrorMessage] = useState('')

    const { state, loadProfile, updateProfile } = useContext(AuthContext)

    useEffect(() => {
        const getData = async () => {
            await loadProfile()
            await AsyncStorage.getItem('profileInfo')
                .then(data => {
                    const parsedData = JSON.parse(data)
                    setEmail(parsedData.email)
                })
                .catch(error => {
                    console.log(error)
                })
        };
        getData();
    }, []);


    const pickImage = async ({navigation}) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const handleEditPress = () => {
        setIsEditable(true);
    };

    const handleSavePress = async () => {
        const isDriver = true

        await updateProfile({email, isDriver, occupation, carBrand, carModel, color, plateNumber})
        var error = await AsyncStorage.getItem('updateError')
        
        if (error === '' || error === null) {
            setIsEditable(false);
            setDidSave(true)
        }
    };

    const handleCancelPress = () => {
        setOccupation('Occupation')
        setIsEditable(false);
    };

    /// Occupation
    const handleOccupationChange = (newOccupation) => {
        setOccupation(newOccupation);
    };

    /// Car Brand
    const handleCarBrandChange = (newCarBrand) => {
        setCarBrand(newCarBrand);
    };

    /// Car Model
    const handleCarModelChange = (newCarModel) => {
        setCarModel(newCarModel);
    };

    /// Car Color
    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    /// Plate Number
    const handlePlateNumberChange = (newPlateNumber) => {
        setPlateNumber(newPlateNumber);
    };

    const pressSubmit = () => {
        if (didSave === false) {
            setLocalErrorMessage('Please Input Your Driver Information First')
        } else {
            navigate('ProfileDriver')
        }
        
    };

    return (
        <KeyboardAvoidingView style={styles.rootContainer} behavior='height'>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.picContainer}>
                    {/* <TouchableOpacity onPress={pickImage}>
                        <Ionicons
                            style={{ paddingLeft: '40%' }}
                            name='pencil-sharp'
                            size={25}
                            color='black'
                        />
                    </TouchableOpacity> */}
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
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <SelectDropdown
                                    data={occupationArray}
                                    buttonStyle={{borderRadius: 20}}
                                    buttonTextStyle={{fontWeight: '700'}}
                                    defaultButtonText='Occupation'
                                    dropdownStyle={{ borderRadius: 20 }}
                                    onSelect={(selectedItem, index) => {
                                        setOccupation(selectedItem)
                                    }}
                                />
                            </View>
                            <View style={styles.subContainer}>
                            </View>
                        </View>


                    ) : (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.showInfo}>{occupation}</Text>
                            </View>

                            <TouchableOpacity onPress={handleEditPress}>
                            </TouchableOpacity>
                        </View>
                    )}
                    
                    
                    {isEditable ? (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <TextInput value={carBrand} onChangeText={handleCarBrandChange}
                                    style={[styles.showInfo, { borderRadius: 20, borderWidth: 1, borderColor: 'black' }]}
                                />
                            </View>
                            <View style={styles.subContainer}>
                            </View>
                        </View>


                    ) : (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.showInfo}>{carBrand}</Text>
                            </View>

                            <TouchableOpacity onPress={handleEditPress}>
                            </TouchableOpacity>
                        </View>
                    )}

                    {isEditable ? (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <TextInput value={carModel} onChangeText={handleCarModelChange}
                                    style={[styles.showInfo, { borderRadius: 20, borderWidth: 1, borderColor: 'black' }]}
                                />
                            </View>
                            <View style={styles.subContainer}>
                            </View>
                        </View>


                    ) : (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.showInfo}>{carModel}</Text>
                            </View>

                            <TouchableOpacity onPress={handleEditPress}>
                            </TouchableOpacity>
                        </View>
                    )}

                    {isEditable ? (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <TextInput value={color} onChangeText={handleColorChange}
                                    style={[styles.showInfo, { borderRadius: 20, borderWidth: 1, borderColor: 'black' }]}
                                />
                            </View>
                            <View style={styles.subContainer}>
                            </View>
                        </View>


                    ) : (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.showInfo}>{color}</Text>
                            </View>

                            <TouchableOpacity onPress={handleEditPress}>
                            </TouchableOpacity>
                        </View>
                    )}

                    {isEditable ? (
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <TextInput value={plateNumber} onChangeText={handlePlateNumberChange}
                                    style={[styles.showInfo, { borderRadius: 20, borderWidth: 1, borderColor: 'black' }]}
                                />
                            </View>
                            <View style={styles.subContainer}>
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
                        <View style={styles.mainContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.showInfo}>{plateNumber}</Text>
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
                    {localErrorMessage ? <Text style={styles.errorMessage}>{localErrorMessage}</Text>: null}
                    <BasicButton
                        text="Submit"
                        onPress={pressSubmit}
                        // If ready, delete onPress={pressSubmit} and uncomment onPress={() => navigation.navigate('Profile_Driver')}
                        // onPress={() => navigation.navigate('Profile_Driver')}
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
        paddingTop: '20%'
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
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "white",
        width: '100%',
        marginRight: '20%',
        marginLeft: '20%',
        textAlign: 'center'
    },

    showEmail: {
        fontSize: 20,
        fontWeight: "700",
        color: 'black',
        width: '120%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "white",
        textAlign: 'center',
        marginLeft: '50%'
    },

    topContainer: {
        alignItems: 'center',
        paddingTop: '20%',
    },

    bottomContainer: {
        alignItems: 'center',
        paddingTop: '10%',
    },

    example: {
        paddingTop: '10%'
    },

    TextPopUp: {
        fontWeight: '700',
        textAlign: 'center',
        width: '85%',
    },

    errorMessage: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(255,0,0,0.7)',
        marginTop: 5,
        textAlign: 'center'
    }

});

export default Profile_BecomeDriver;