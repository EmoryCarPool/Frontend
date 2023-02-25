import createDataContext from "./createDataContext";
import carpoolApi from "../api/carpool"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'sendOTP':
            return {errorMessage: '', token: action.payload}
        case 'verifyOTP':
            return {errorMessage: '', token: action.payload}
        case 'resetPassword':
            return {errorMessage: ''}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {token: null, errorMessage: ''}
        default: 
            return state
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

// function that attempts to automatically sign user in
const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      navigate("Home");
    } else {
      navigate("loginFlow");
    }
  };


const signin = (dispatch) => async ({email, password}) => {
    const signInInfo = {
        email: email,
        password: password
    }
    
    try {
        const response = await carpoolApi.post('/api/user/login', signInInfo)  
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})

        navigate('Home')
    } catch (error) {
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

const sendOTP = (dispatch) => async ({email}) => {
    const sendOTPInfo = {
        email: email
    }
    
    try {
        const response = await carpoolApi.post('/api/user/sendOTP', sendOTPInfo)  
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'sendOTP', payload: response.data.token})
    } catch (error) {
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

const verifyOTP = (dispatch) => async ({email, emailCode}) => {
    const verifyOTPInfo = {
        email: email,
        otp: emailCode
    }
    
    try {
        const response = await carpoolApi.post('/api/user/verifyOTP', verifyOTPInfo)  
        await AsyncStorage.setItem('token', response.data.token)
    } catch (error) {
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

// action function posts user inputs from Signup page to carpoolApi
const signup = (dispatch) => async ({first_name, last_name, email, phone_number, password, isDriver, driver_info}) => {
    const signUpInfo = {
        first_name : first_name, 
        last_name: last_name, 
        email : email, 
        phone_number: phone_number, 
        password: password, 
        isDriver: isDriver, 
        driver_info: driver_info
    }

    try {
        const response = await carpoolApi.post('/api/user/signup', signUpInfo)
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('Home');
        // console.log(response.data.token)

    } catch (error) {
        // console.log(error.response.data.error)
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow");
};

const resetPassword = (dispatch) => async ({email, password}) => {
    const resetPasswordInfo = {
        email: email,
        newPassword: password
    }
    
    try {
        const response = await carpoolApi.post('/api/user/resetPassword', resetPasswordInfo)  
        dispatch({type: 'resetPassword'})
    } catch (error) {
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin, sendOTP, verifyOTP, resetPassword}, // object with action functions
    {token: null, errorMessage: ''} // initial state: null token, empty errorMessage
)