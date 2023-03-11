import React, { useContext, useState } from "react";
import createDataContext from "./createDataContext";
import carpoolApi from "../api/carpool"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const FPReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'postPassRequest':
            return {findDriverRequestInfo: action.payload}
        case 'loadTimeslot':
            return {timeslotInfo: action.payload}
        case 'getSelectedRequest':
            return {selectedRequestInfo: action.payload}
        case 'getMaxPrice':
            return {maxPrice: action.payload}
        case 'postDriverRequest':
            return {findPassengerRequestInfo: action.payload}
        default:
            return state
    }
}

// used in the findDriver screen

const postPassRequest = (dispatch) => async({from, to, location, destination, numPeople}) => { 

    const token = await AsyncStorage.getItem('token')

    const passRequestInfo = {
        // CHANGE TO ARMY TIME for from and to 4 digits
        from: from,
        to: to,
        pick_up: location,
        destination: destination,
        num_of_pass: numPeople,
    }


    try {
        const response = await carpoolApi.post('/api/findDriver/', passRequestInfo, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        dispatch({type:'postPassRequest', payload: passRequestInfo})

        navigate('Home')

    } catch (error) {
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

// used in the timeslot buttons at FindPassengerScreen1
// data will be dictionary[time:numRequests]
let loadTimeslotInfo = null
const loadTimeslot = (dispatch) => async({currentLocation,finalDestination, maxCap}) => {
    
    const token = await AsyncStorage.getItem('token')

    loadTimeslotInfo = {
        max_capacity: maxCap,
        driver_current: currentLocation,
        driver_dest: finalDestination,
    }
    
    try {
        const response = await carpoolApi.post('/api/findDriver/count/', loadTimeslotInfo, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })

        const stringData = JSON.stringify(response.data)
        await AsyncStorage.setItem('dictionary', stringData)

        navigate('FindPassenger2')

    } catch (error) {
        const message = error.response.data.error
        dispatch({type: 'add_error', payload: message})
    }
}

// used to load all individual requests for FindPassengerScreen2
// get_Requested_Rides
const getSelectedRequest = (dispatch) => async({inputTime}) => {
    
    const token = await AsyncStorage.getItem('token')

    const getSelectedRequestInfo = {
        max_capacity: loadTimeslotInfo.max_capacity,
        driver_current: loadTimeslotInfo.driver_current,
        driver_dest: loadTimeslotInfo.driver_dest,
        time_interval: inputTime,
    }
    
    try {
        const response = await carpoolApi.post('/api/findDriver/get/', getSelectedRequestInfo, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })

        console.log("Response: ", response.data)

        const stringData = JSON.stringify(response.data)
        await AsyncStorage.setItem('array', stringData)

        navigate('FindPassenger3')

    } catch (error) {
        const message = error.response.data.error
        console.log(message)
    }
}

// used to post the driver's request in FindPassengerScreen2
// request_to_pass
    // use the json file object from get_Requested_Rides get API route to post, including price and rideTime
const postDriverRequest = (dispatch) => async({findDriver_id, pick_up, pass_dest, driver_current, driver_dest, max_price, min_price, additional_time, price, time_of_pickup}) => {
    const token = await AsyncStorage.getItem('token')
    
    const driverRequestInfo = {
        findDriver_id,
        pick_up,
        pass_dest,
        driver_current,
        driver_dest,
        max_price,
        min_price,
        additional_time,
        price,
        time_of_pickup
    }

    console.log("driverRequestInfo: ", driverRequestInfo)

    try {
        const response = await carpoolApi.post('/api/requests_to_pass/', driverRequestInfo, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })


    } catch (error) {
        console.log(error.response.data.error)
    }
}



export const { Provider, Context } = createDataContext(
    FPReducer,
    {postPassRequest, loadTimeslot, getSelectedRequest, postDriverRequest}, // object with all action functions included
    {errorMessage: '', findDriverRequestInfo: {}, timeslotInfo: {}, selectedRequestInfo: {}, maxPrice: 0, findPassengerRequestInfo: {}, timeslotRequestInfo: {}} // initial state of variables
)