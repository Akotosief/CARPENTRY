import React, { useState, useEffect } from 'react';
import { ImageBackground, View, TouchableOpacity, Text, TextInput, StyleSheet, Alert, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useFonts } from "expo-font";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fontsLoaded, error] = useFonts({
       "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Smothy-Bubble": require("../assets/fonts/Smothy-Bubble.ttf"), 
    });

    useEffect(() => {
        if (error) {
            console.error("Error loading fonts:", error);
        }
    }, [error]);

    const handleLoginPress = async () => {
        if (username === '' || password === '') {
            Alert.alert('Error', 'Please enter your username and password.');
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;
            console.log("User logged in successfully:", user);
            navigation.navigate("HomeScreen");
            setUsername('');
            setPassword('');
        } catch (error) {
            Alert.alert("Error", "Invalid credentials");
        }
    };

    const handleSignUpPress = () => {
        navigation.navigate("SignupScreen");
    };

    if (!fontsLoaded) {
        return null; // Show a loading indicator or nothing until fonts are loaded
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require("../assets/white.jpg")}
        >
            <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.header}>TLE CARPENTRY</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.section}>
                            <TextInput
                                placeholder="Username"
                                value={username}
                                onChangeText={setUsername}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.section}>
                            <TextInput
                                placeholder="Password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
                                <Text style={styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSignUpPress} style={styles.button}>
                                <Text style={styles.buttonText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password reset link sent!')}>
                            <Text style={styles.linkText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Copyright @2024 TLE Carpentry App</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
    },
    header: {
        color: '#000',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: "HanumanBlack",
    },
    contentContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    section: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        color: '#000',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontFamily: "HanumanBlack",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: '40%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1a202c',
        backgroundColor: '#C4D7FF',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "PlayfairDisplayBlack",
    },
    linkText: {
        color: '#007BFF',
        marginTop: 10,
        fontSize: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    footerText: {
        color: '#000',
        fontSize: 14,
    },
});

export default LoginScreen;