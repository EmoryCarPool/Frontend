// helper component to display Email input view, and store the actual email using the useState hook

import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const EmailInput = () => {
    const [email, setEmail] = useState('');

    return (
            <View style={styles.emailContainer}>
                <TextInput
                    style= {styles.emailTextInput}
                    color="rgba(0,0,0,0.6)"
                    placeholder= "Emory Email"
                    placeholderTextColor="rgba(0,0,0,0.6)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value= {email}
                    onChangeText= {(newValue) => setEmail(newValue)}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
        width: '85%',
    },

    emailTextInput: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 10,
        paddingRight: 15,
    },
})

export default EmailInput;