// helper component to display password input view, and store the actual password using the useState hook

import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const PasswordInput = () => {
    const [password, setPassword] = useState('');

    return (
            <View style={styles.passwordContainer}>
                <TextInput
                    style= {styles.passwordTextInput}
                    color="rgba(0,0,0,0.6)"
                    placeholder= "Password"
                    placeholderTextColor="rgba(0,0,0,0.6)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value= {password}
                    onChangeText= {(newValue) => setPassword(newValue)}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
        width: '85%',
    },

    passwordTextInput: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 10,
        paddingRight: 15
    },

})

export default PasswordInput;