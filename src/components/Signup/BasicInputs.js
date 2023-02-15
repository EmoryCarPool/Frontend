// helper component to display Email input view, and store the actual email using the useState hook

import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const BasicInputs = (props) => {
    const [inputText, setinputText] = useState('');

    return (
            <View style={styles.inputContainer}>
                <TextInput
                    style= {styles.TextInput}
                    color="rgba(0,0,0,0.6)"
                    fontWeight="700"
                    placeholder= {props.title}
                    placeholderTextColor="rgba(0,0,0,0.6)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value= {inputText}
                    onChangeText= {(newValue) => setinputText(newValue)}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
        width: '85%',
    },

    TextInput: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 10,
        paddingRight: 15,
    },
})

export default BasicInputs;