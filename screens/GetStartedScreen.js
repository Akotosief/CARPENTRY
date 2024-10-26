import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back arrow

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/white.jpg')} // Background image
        style={styles.background}
      >
        {/* Back Arrow */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>TLE CARPENTRY</Text>
          <Image 
            source={require('../assets/get.png')} // Center image
            style={styles.centerImage}
          />
          
          {/* Description Text */}
          <Text style={styles.description}>
            Welcome to TLE Carpentry! Explore the world of carpentry with us and enhance your skills.
          </Text>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Center items vertically
    alignItems: 'center',      // Center items horizontally
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  content: {
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    padding: 20, // Add padding if needed
  },
  centerImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 20, // Optional padding for better readability
  },
  button: {
    backgroundColor: '#B7B7B7',
    borderRadius: 10,
    padding: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#3C3D37',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;