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
import FindPassenger1Screen from './src/screens/FindPassenger1Screen';
import FindPassenger2Screen from './src/screens/FindPassenger2Screen';
import ProfileScreen from './src/screens/ProfileScreen';
import BecomeDriverScreen from './src/screens/BecomeDriverScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setNavigator } from './src/navigationRef';
import {Provider as FPProvider} from './src/context/FPContext';
import SetDepartingScreen from './src/screens/SetDepartingScreen';
import FindDriverScreen_DepartSchool from './src/screens/FindDriverScreen_DepartSchool';
import FindDriverScreen_DepartHome from './src/screens/FindDriverScreen_DepartHome';
import Profile_Driver from './src/screens/Profile_Driver';
import Profile_Passenger from './src/screens/Profile_Passenger';
import Profile_BecomeDriver from './src/screens/Profile_BecomeDriver';
import UpcomingRideEmpty from './src/screens/UpcomingRideEmpty';
import UpcomingRide_Passenger from './src/screens/UpcomingRide_Passenger';
import RequestedRide from './src/screens/RequestedRide';
import PendingRide from './src/screens/PendingRide';
import ChangePassword_Verify from './src/screens/ChangePassword_Verify';
import ChangePassword_Reset from './src/screens/ChangePassword_Reset';


const switchNavigator = createSwitchNavigator({
    Initial: InitialScreen,

    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
        ResetPasswordVerify: ResetPasswordVerifyScreen,
        ResetPasswordReset: ResetPasswordResetScreen

    }, { headerMode: "none" } // this will hide the header in the stackNavigator
    ),

    mainFlow: createMaterialBottomTabNavigator({
        Home: HomeScreen,
        FindDriver: FindDriverScreen_DepartSchool,
        FindPassenger: FindPassenger1Screen,
        Profile: ProfileScreen,
    })
})

// const App = createAppContainer(switchNavigator);

const passenger = createMaterialBottomTabNavigator({
    HomeFlow: createStackNavigator({HomeScreen,
    SetDepart: SetDepartingScreen,
    UpcomingRide_P: UpcomingRide_Passenger,
    RequestRide: RequestedRide,
    PendingRide: PendingRide,
}),
    FindDriverFlow: createStackNavigator({
        SetDepart: SetDepartingScreen,
        FindDriver_S: FindDriverScreen_DepartSchool,
        FindDriver_H: FindDriverScreen_DepartHome
    }, { headerMode: "none" }),
    FindPassenger: FindPassenger1Screen,
    // Profile: ProfileScreen,
    ProfileFlow: createStackNavigator({
        Pprofile: Profile_Passenger,
        DProfile: Profile_Driver,
        BecomeDriver: Profile_BecomeDriver,
        ChangePassword_Verify : ChangePassword_Verify,
        ChangePassword_Reset : ChangePassword_Reset,
    }),
    Upcoming: UpcomingRide_Passenger,
    ChangePassword_Verify : ChangePassword_Verify,
})

const App = createAppContainer(passenger)

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