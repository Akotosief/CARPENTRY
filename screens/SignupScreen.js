import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Alert, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Smothy-Bubble": require("../assets/fonts/Smothy-Bubble.ttf"), 
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [error]);

  const isFormValid = () => {
    const isEmailValid = email.includes("@") && email.length > 5;
    const isPasswordValid = password.length >= 8;
    const passwordsMatch = password === confirmPassword;
    
    return isEmailValid && isPasswordValid && passwordsMatch;
  };

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert(
        "Try again",
        "Please enter a valid email and matching passwords with at least 8 characters"
      );
      return; // Exit the function if the form is not valid
    }

    try {
      // Proceed with signup using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up successfully:", user);
      Alert.alert("Success", "Account created successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Error", `Error creating user: ${error.message}`); // Show Firebase error message
    }
  };

  if (!fontsLoaded) {
    return null; // Or show a loading indicator
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>TLE CARPENTRY</Text>
          <View style={styles.contentContainer}>
            <View style={styles.section}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
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
            <View style={styles.section}>
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSignup} style={styles.button}>
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={styles.button}>
                <Text style={styles.buttonText}>Return</Text>
              </TouchableOpacity>
            </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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

export default SignupScreen;