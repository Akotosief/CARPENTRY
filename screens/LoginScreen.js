import React, { useState } from 'react';
import { Image,ImageBackground, View, TouchableOpacity, Text, TextInput, StyleSheet, Alert, Dimensions, Platform, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPress = () => {
      if (username === '' || password === '') {
        Alert.alert('Error', 'Please enter your username and password.');
      } else {
        navigation.navigate('Home', { username, password });
        setUsername('');
        setPassword('');
      }
    };

    const handleSignUpPress = () => {
      Alert.alert('Success', 'Sign up successful!');
    };

  
     return (
      <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/set.png')}
        resizeMode="cover"
        style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      ></ImageBackground>
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={[styles.section, { marginBottom: 50 }]}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/hacksaw.gif')} style={{ position: 'absolute', width: '40%', height: '160%',bottom: 60, left: 60, marginBottom: 10, alignSelf: 'left', flex: 0 }}
        repeat={true} />
         <Image source={require('../assets/1234yy.png')} style={{ position: 'absolute', width: '40%', height: '305%', left: 60,bottom: 0, top: 308, alignSelf: 'left', flex: 0 }}
        repeat={true} />
              <Text style={[styles.header, { fontStyle: 'italic',  alignSelf: 'center', textAlign: 'center', marginBottom: 10, fontSize: 35, fontWeight: 'bold', color: '#000000', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 10 }]}>TLE CARPENTRY</Text>
            </View>
          </View>
          <View style={styles.section}>
            <TextInput placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} style={[styles.input, { width: 260, height: 40, borderWidth: 1, textAlign: 'center',margintop: 10, backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#000000', color: '#000000', paddingTop: 10 }]} />
          </View>
          <View style={styles.section}>
            <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={[styles.input, { width: 260, height: 40, borderWidth: 1, textAlign: 'center', marginTop: 20, backgroundColor: 'transparent', borderRadius: 10, borderWidth: 1, borderColor: '#000000', color: '#000000' }]} />
          </View>
          <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }]}>
          <TouchableOpacity onPress={handleLoginPress}  style={[styles.button, { backgroundColor: '#C4D7FF', borderColor: '#1a202c' }]}>
  <Text style={{ color: '#fff', fontSize: 16 }}>Log in</Text>
</TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={handleSignUpPress} style={[styles.button, { backgroundColor: '#C4D7FF', borderColor: '#1a202c' }]}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', marginBottom: 10, zIndex: 0 }, Platform.OS === 'android' && { opacity: 0.5 }]}>
          <Text style={{color: '#000000', fontSize: 14 }}> Copyright  @2024 TLE Carpentry App</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    
  
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
      borderRadius: 10,
      padding: 20,
    },
    contentContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
      margin: 20,
      borderRadius: 10,
    },
    section: {
      marginBottom: 20,
      marginHorizontal: 20,
    },
    logoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginRight: 10,
      marginBottom: 10,
    },
    header: {
      color: '#fff',
      marginBottom: 50,
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 10,
    },
    label: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 10,
    },
    input: {
      height: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: '#fff',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: 300,
      borderRadius: 10,
      borderColor: '#1a202c',
      borderWidth: 1,
      blurRadius: 10,
      justifyContent: 'center',
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    button: {
      width: 135,
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#1a202c',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    spacer: {
      width: 30,
    },
    footer: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      zIndex: 0,
    },
    footerText: {
      color: '#fff',
      fontSize: 11,
    },
  }, {
    footerContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    }
  });

export default LoginScreen;