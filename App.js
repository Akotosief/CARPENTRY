import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ImageBackground } from 'react-native';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, StatusBar, Image, Button, Alert, TouchableOpacity } from 'react-native';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutUsScreen.js';
import DetailsScreen from './screens/DetailsScreen.js';
import GetStartedScreen from './screens/GetStartedScreen';
import SignupScreen from './screens/SignupScreen.js';


const Stack = createStackNavigator();

const App = () => {
  const App = () => {
    useEffect(() => {
      initializeFirebase();
    }, []);

  const handleLoginPress = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter your username and password.');
    } else {
      navigation.navigate('Dashboard', { username, password });
      setUsername('');
      setPassword('');
    } }
  };
  

  const handleSignUpPress = () => {
    Alert.alert('Success', 'Sign up successful!');
  };

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="GetStarted" // Set initial route to GetStarted
      screenOptions={{
        headerShown: false, // Hide header for all screens
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AboutUs" component={AboutScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

    export default App;
