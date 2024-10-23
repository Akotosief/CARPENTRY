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



const Stack = createStackNavigator();

const App = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = Dimensions.get('window');

  const handleLoginPress = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter your username and password.');
    } else {
      navigation.navigate('Dashboard', { username, password });
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
        source={require('./assets/set.png')}
        resizeMode="cover"
        style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      ></ImageBackground>
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={[styles.section, { marginBottom: 50 }]}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./assets/hacksaw.gif')} style={{ position: 'absolute', width: '40%', height: '160%',bottom: 60, left: 60, marginBottom: 10, alignSelf: 'left', flex: 0 }}
        repeat={true} />
         <Image source={require('./assets/1234yy.png')} style={{ position: 'absolute', width: '40%', height: '305%', left: 60,bottom: 0, top: 308, alignSelf: 'left', flex: 0 }}
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
            <TouchableOpacity onPress={handleLoginPress} style={[styles.button, { backgroundColor: '#C4D7FF', borderColor: '#1a202c' }]}>
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
    backgroundColor: '#fff',
  },
  content: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 150,
  },
  section: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#2c3e50',
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1a202c',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutUs" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Dashboard = ({ route, navigation }) => {
  const { username, password } = route.params ?? {};
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/set.png')}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, margin: 20, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Welcome Learners!</Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
          <Image source={require('./assets/measuring-tape.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify' }}>
            TLE Carpentry, or Technical and Livelihood Education Carpentry, is a vocational training program designed to equip students with essential carpentry skills. This program is often integrated into school curricula, targeting those interested in pursuing careers in woodworking, construction, or related trades. By combining theoretical knowledge with practical application, TLE Carpentry prepares students for real-world challenges in the construction industry.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
          <Image source={require('./assets/screw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify' }}>
            The curriculum of TLE Carpentry includes a variety of fundamental topics. Students learn basic carpentry skills, such as the proper use of hand and power tools, construction techniques like framing and finishing, and essential blueprint reading. Additionally, the program covers material science, providing students with knowledge about different types of wood and construction materials. This comprehensive approach ensures that students gain a robust understanding of carpentry principles.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
          <Image source={require('./assets/circular-saw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify' }}>
            A significant aspect of TLE Carpentry is hands-on training, where students engage in practical projects that simulate real-life carpentry tasks. This experience allows them to apply theoretical knowledge in a controlled environment. Furthermore, safety practices are emphasized, teaching students the importance of using personal protective equipment (PPE) and adhering to workplace safety standards. This focus on safety ensures that students are well-prepared for the realities of the job site.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
          <Image source={require('./assets/circular-saw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify' }}>
            Upon completion of the TLE Carpentry program, graduates have access to various career opportunities, including roles as carpenters, cabinetmakers, or construction supervisors. The skills acquired can also lead to self-employment or positions within construction firms. Additionally, many programs offer certification, validating the students' skills to potential employers. Overall, TLE Carpentry is vital in fostering skilled professionals who contribute significantly to the construction industry and local economies.
            </Text>
          </View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginBottom: 20, marginVertical: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('App')} style={{ backgroundColor: '#C4D7FF', borderRadius: 10, padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center',  borderColor: '#000000' }}>
              <Text style={{ color: '#fff', fontSize: 14 }}>Back to login</Text>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={{ backgroundColor: '#C4D7FF', borderRadius: 10, padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center',  borderColor: '#000000' }}>
              <Text style={{ color: '#fff', fontSize: 14 }}>About us</Text>
            </TouchableOpacity>
          </View>
       
      </ImageBackground>
    </SafeAreaView>
  );
};

const AboutUs  = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{ position: 'absolute', top: 20, left: 20, right: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 10, padding: 5 }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>About us  </Text>
      </View>
      <ScrollView style={{ flex: 1, position: 'absolute', top: 60, bottom: 60, left: 0, right: 0 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>UI / User Interface</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The user interface of this app is designed to be simple and easy to use. The login screen has a simple design with a username and password input field. The dashboard screen has a few features such as a button to sign out, a button to view the about us screen, and a button to view the physical education benefits screen. The about us screen has a simple design with a logo and a text that describes the app. The physical education benefits screen has a simple design with a text that describes the benefits of physical education.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>UX / User Experience</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The user experience of this app is designed to be simple and easy to use. The login screen is simple and easy to use, with a clear call-to-action to login. The dashboard screen is also simple and easy to use, with clear labels and buttons to view the about us screen and the physical education benefits screen. The about us screen is a simple screen with a logo and a text that describes the app. The physical education benefits screen is a simple screen with a text that describes the benefits of physical education. The app is designed to be easy to use and navigate, with clear and concise labels and buttons.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>User Persona</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The user persona for this app is a person who is interested in physical education and wants to know more about it. The user is likely to be a student or a teacher who is looking for a simple and easy to use app to learn about physical education. The user is likely to be between the ages of 18 and 35, and is likely to have a basic understanding of technology. The user is looking for an app that is easy to use and navigate, with clear and concise labels and buttons. The user is also looking for an app that provides useful information about physical education, such as the benefits of physical education and a description of the physical education curriculum.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Color Theory</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The color theory of this app is based on the principles of contrast, harmony, and unity. The main colors used in this app are black, white, and blue. The black color is used as the background color of the app, while the white color is used as the text color. The blue color is used as the accent color of the app, and it is used to highlight the buttons and other interactive elements of the app. The colors are used in a way that creates contrast between the different elements of the app, while also creating harmony and unity between the different colors. The color theory of this app is designed to be simple and easy to use, while also being visually appealing and effective.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>60 / 30 / 10 Rule</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The 60/30/10 rule is a design principle that suggests that 60% of the design should be a dominant background color, 30% should be a secondary color, and 10% should be an accent color. In this app, the dominant background color is black, the secondary color is white, and the accent color is blue. This principle is used to create visual hierarchy and balance in the design.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Typography</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The typography of this app is based on the Open Sans font. The font is used in a way that creates hierarchy and balance in the design. The headers are bold and large, while the paragraphs are smaller and regular. The color of the text is white, and the background color is black. The text is also aligned to the center of the screen, which creates a sense of balance and harmony in the design.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Spacing</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              The spacing of this app is designed to create a sense of balance and harmony. The padding of the views is set to 20, and the margin is set to 20. The width of the views is set to 90%, which creates a sense of balance and harmony in the design. The spacing also helps to create a clear visual hierarchy in the design.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10, width: '90%' }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Lazy Linking Prototyping</Text>
            <Image source={require('./assets/hacksaw.gif')} style={{ width: 75, height: 75, borderRadius: 37.5, marginRight: 10, marginBottom: 10, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'justify', alignSelf: 'center' }}>
              Lazy Linking Prototyping is a process of creating a prototype of an application by linking together different components of the application lazily. This means that the components are only loaded when they are needed, which can reduce the amount of time it takes to load the application. This approach can be useful for applications that have many components or that require a lot of data to be loaded. By only loading the components that are needed, the application can load faster and be more efficient. This approach can also be useful for prototyping applications, as it allows developers to quickly create a prototype of the application without having to write a lot of code.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#C4D7FF', borderRadius: 10, padding: 10, flex: 1, marginRight: 10 }}>
          <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center' }}>Back to dashboard</Text>
        </TouchableOpacity>
    borderColor: '#1a202c',
    <TouchableOpacity onPress={() => navigation.navigate('App')} style={{ backgroundColor: '#C4D7FF', borderRadius: 10, padding: 10, flex: 1 }}>
          <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center' }}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AppContainer;

