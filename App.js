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
import FindDriverScreen from './src/screens/FindDriverScreen';
import FindPassenger1Screen from './src/screens/FindPassenger1Screen';
import FindPassenger2Screen from './src/screens/FindPassenger2Screen';
import ProfileScreen from './src/screens/ProfileScreen';
import BecomeDriverScreen from './src/screens/BecomeDriverScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setNavigator } from './src/navigationRef';


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
        FindDriver: FindDriverScreen,
        FindPassenger: FindPassenger1Screen,
        Profile: ProfileScreen,
    })
})

// const App = createAppContainer(switchNavigator);

const passenger = createMaterialBottomTabNavigator({
    Home: HomeScreen,
    FindDriver: FindDriverScreen,
    FindPassenger: FindPassenger1Screen,
    // Profile: ProfileScreen,
})

const App = createAppContainer(passenger)

export default () => {
    return (
        <SafeAreaProvider>
            <App/>
        </SafeAreaProvider>
    )
}


// export default () => {
//     return (
//         <SafeAreaProvider>
//             <AuthProvider>
//                 <App ref={(navigator)=> {setNavigator(navigator)}}/>
//             </AuthProvider>
//         </SafeAreaProvider>
//     )
// };

