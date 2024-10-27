import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, StyleSheet, Alert, Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPress = () => {
        if (username === '' || password === '') {
            Alert.alert('Error', 'Please enter your username and password.');
        } else {
            // Navigate to the Home screen; replace 'Home' with your actual home screen name
            navigation.navigate('Home', { username, password });
            setUsername('');
            setPassword('');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
                <View style={styles.content}>
                    {/* Back Arrow */}
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.header}>TLE CARPENTRY</Text>
                    <View style={styles.gifContainer}>
                        <Image source={require('../assets/hacksaw.gif')} style={styles.gif} />
                    </View>
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
                            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password reset link sent!')}>
                            <Text style={styles.linkText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/1234yy.png')} style={styles.image} />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Copyright @2024 TLE Carpentry App</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
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
        marginTop: 20,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 120,
        bottom: 30,
    },
    gifContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    gif: {
        width: 100,
        height: 100,
    },
    contentContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
        marginTop: 13,
        bottom: 20,
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
    },
    linkText: {
        color: '#007BFF',
        marginTop: 10,
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 170,
        height: 170,
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