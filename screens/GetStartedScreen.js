import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font'; // Import useFonts from expo-font

const GetStartedScreen = () => {
  const navigation = useNavigation();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Nostalgic": require("../assets/fonts/Nostalgic.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/white.jpg')} // Background image
        style={styles.background}
      >
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
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright @2024 TLE Carpentry App</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  centerImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    bottom: 50,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Nostalgic', // Use custom font for title
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
    fontFamily: 'Roboto-Medium', // Use custom font for description
  },
  button: {
    backgroundColor: '#C4D7FE',
    borderRadius: 10,
    padding: 15,
    width: 300,
    top: 50,
    alignItems: 'center',
    borderColor: '#00000',
    borderWidth: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
    fontSize: 14,
  },
});

export default GetStartedScreen;