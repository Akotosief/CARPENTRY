
import React from 'react';
import { ImageBackground ,StatusBar, SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AboutScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/set.png')} style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>About us</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {sections.map((section, index) => (
            <View key={index} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Image source={require('../assets/hacksaw.gif')} style={styles.image} />
              <Text style={styles.sectionText}>{section.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const sections = [
  {
    title: "UI / User Interface",
    text: "The user interface of this app is designed to be simple and easy to use. The login screen has a simple design with a username and password input field, with a background image of a sports field. The dashboard screen has a few features such as a button to sign out, a button to view the about us screen, and a button to view the physical education benefits screen. The about us screen has a simple design with a logo and a text that describes the app. The physical education benefits screen has a simple design with a text that describes the benefits of physical education."
  },

  {
    title: "UX / User Experience",
    text: "The user experience of this app is designed to be simple and easy to use. The user can easily navigate through the app by using the buttons and labels provided. The app is designed to provide a clear and concise description of the benefits of physical education, while also providing a simple and easy to use interface for the user to login and view the about us screen."
  },
  {
    title: "User Persona",
    text: "The user persona for this app is a person who wants to learn more about physical education benefits. The user is likely to be a student or a teacher who is looking for a simple and easy to use app to learn about the benefits of physical education. The user is likely to be between the ages of 18 and 35, and is likely to have a basic understanding of technology. The user is looking for an app that is easy to use and navigate, with clear and concise labels and buttons. The user is also looking for an app that provides useful information about physical education benefits, such as a description of the physical education benefits and a link to the about us screen."
  },

  {
    title: "Color Theory",
    text: "This application employs a color theory that emphasizes balance and user engagement. The primary colors are dark gray, off-white, and teal. Dark gray serves as the background, providing a modern and sleek aesthetic. Off-white is used for text, ensuring readability and a clean look. Teal is the accent color, used sparingly to draw attention to key interactive elements like buttons and links. This color scheme is chosen to foster a sense of professionalism and tranquility, enhancing the user's overall experience."
  },
  {
    title: "60 / 30 / 10 Rule",
    text: "The 60/30/10 rule is a design principle suggesting that 60% of the design should be a dominant color, 30% a secondary color, and 10% an accent color. In this application, the dominant color is dark gray, the secondary color is off-white, and the accent color is teal. This approach ensures a visually engaging and balanced interface, enhancing user interaction and focus."
  },
  {
    title: "Typography",
    text: "The typography of this app is based on the Open Sans font. The font is used in a way that creates hierarchy and balance in the design. The headers are bold and large, while the paragraphs are smaller and regular. The color of the text is off-white, and the background color is dark gray. The text is also aligned to the left of the screen, which creates a sense of balance and harmony in the design."
  },
  {
    title: "Spacing",
    text: "The spacing of this app is designed to create a sense of balance and harmony. The padding of the views is set to 15, and the margin is set to 10. The width of the views is set to 95%, which creates a sense of balance and harmony in the design. The spacing also helps to create a clear visual hierarchy in the design."
  },

  {
    title: "Lazy Linking Prototyping",
    text: "Lazy Linking Prototyping is a process of creating a prototype of an application by linking together different components of the application lazily. This means that the components are only loaded when they are needed, which can reduce the amount of time it takes to load the application. This approach can be useful for applications that have many components or that require a lot of data to be loaded. By only loading the components that are needed, the application can load faster and be more efficient. In this application, lazy linking prototyping is used to create a prototype of the application quickly and efficiently, without having to write a lot of code."
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a202c',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(140, 26, 98, 0.33) ',
    borderRadius: 10,
    padding: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    position: 'absolute',
    top: 60,
    bottom: 60,
    left: 0,
    right: 0,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  sectionContainer: {
    backgroundColor: 'rgba(140, 26, 98, 0.33)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    width: '90%',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  sectionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'justify',
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  footerButton: {
    backgroundColor: '#C4D7FE',
    borderColor: '#1a202c',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 10,

  },
  footerButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }
});

export default AboutScreen;
