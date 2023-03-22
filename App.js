// this is the main application file that connects all display screens together based on application logic

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import InitialScreen from './src/screens/InitialScreen'
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ResetPasswordVerifyScreen from './src/screens/ResetPasswordVerifyScreen';
import ResetPasswordResetScreen from './src/screens/ResetPasswordResetScreen';
import HomeScreen from './src/screens/HomeScreen';
import FindDriverScreen_DepartHome from './src/screens/FindDriverScreen_DepartHome';
import FindDriverScreen_DepartSchool from './src/screens/FindDriverScreen_DepartSchool';
import FindPassenger1Screen from './src/screens/FindPassenger1Screen';
import FindPassenger2Screen from './src/screens/FindPassenger2Screen';
import FindPassenger3Screen from './src/screens/FindPassenger3Screen';
import ProfileScreen from './src/screens/ProfileScreen';
import Profile_Passenger from './src/screens/Profile_Passenger';
import BecomeDriverScreen from './src/screens/BecomeDriverScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as FPProvider} from './src/context/FPContext'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setNavigator } from './src/navigationRef';
import SetDepartingScreen from './src/screens/SetDepartingScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
}, {headerMode: "none"}
)

const FindDriverNavigator = createStackNavigator({
    SetDepart: SetDepartingScreen,
    FindDriverS: FindDriverScreen_DepartSchool,
    FindDriverH: FindDriverScreen_DepartHome,
}, {headerMode: "none"}
)

const FindPassengerNavigator = createStackNavigator({
    FindPassenger1: FindPassenger1Screen,
    FindPassenger2: FindPassenger2Screen,
    FindPassenger3: FindPassenger3Screen,
}, { headerMode: "none" }
)

// switch navigator (based on user's is_driver boolean) between 
const ProfileNavigator = createStackNavigator({
    Pprofile: Profile_Passenger,
}, {headerMode: "none"}
)

const switchNavigator = createSwitchNavigator({
    Initial: InitialScreen,

    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
        ResetPasswordVerify: ResetPasswordVerifyScreen,
        ResetPasswordReset: ResetPasswordResetScreen

    }, { headerMode: "none" } // this will hide the header in the stackNavigator
    ),

    mainFlow: createMaterialBottomTabNavigator(
        {
            HomeFlow: {
                screen: HomeNavigator,
                navigationOptions: {
                    title: 'Home',
                    tabBarIcon: <Ionicons name= 'home-outline' size= {26} color= 'black'/>,
                },
            },

            FindDriverFlow: {
                screen: FindDriverNavigator,
                navigationOptions: {
                    title: 'Find Driver',
                    tabBarIcon: <Ionicons name= 'car-outline' size= {35} color= 'black'/>
                }
            },

            FindPassengerFlow: {
                screen: FindPassengerNavigator,
                navigationOptions: {
                    title: 'Find Passenger',
                    tabBarIcon: <FontAwesome name= 'handshake-o' size= {26} color= 'black'/>
                }
            },

            ProfileFlow: {
                screen: ProfileNavigator,
                navigationOptions: {
                    title: 'Profile',
                    tabBarIcon: <Ionicons name= 'md-person-circle-outline' size= {30} color= 'black'/>
                }
            },
        },
        
    )
})

const App = createAppContainer(switchNavigator)


export default () => {
    return (
        <SafeAreaProvider>
            <AuthProvider>
             <FPProvider>
                <App ref={(navigator)=> {setNavigator(navigator)}}/>
             </FPProvider>
            </AuthProvider>
        </SafeAreaProvider>
    )
};

