import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutUsScreen = () => {
  const navigation = useNavigation();
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(null);

  const members = [
    { name: 'MONTALBO', description: 'UX DESIGN PRINCIPLES', image: require('../assets/a5.jpg') },
    { name: 'PANTALEON', description: 'LAZY LINKING PROTOTYPE', image: require('../assets/a1.jpg') },
    { name: 'QUILBIO', description: '60-30-10', image: require('../assets/a4.jpg') },
    { name: 'QUINDOZA', description: 'TYPOGRAPHY', image: require('../assets/a3.jpg') },
    { name: 'SECUYA', description: 'COLOR THEORY', image: require('../assets/a2.jpg') },
    { name: 'YUGTO', description: 'USER PERSONA', image: require('../assets/a6.jpg') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.MeetContainer}>
          <Text style={styles.title}>Meet Our Team</Text>
        </View>
        <View style={styles.cardsContainer}>
          {members.map((member, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                selectedMemberIndex === index && styles.cardExpanded,
              ]}
              onPress={() => {
                // Toggle the selected member index
                setSelectedMemberIndex(selectedMemberIndex === index ? null : index);
              }}
            >
              <Image source={member.image} style={styles.cardImage} />
              <Text style={styles.cardName}>{member.name}</Text>
              {selectedMemberIndex === index && (
                <Text style={styles.cardDescription}>{member.description}</Text>
              )}
            </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  MeetContainer: {
    backgroundColor: '#B7B7B7',
    padding: 5,
    margin: 30,
    width: 'auto', // Responsive width
    marginBottom: 20,
    borderRadius: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3C3D37',
    textAlign: 'center',
    marginBottom: 3,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Adjust width to fit two cards per row
    backgroundColor: '#B7B7B7',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    padding: 10,
    height: 200, // Set a fixed height for non-selected cards
  },
  cardExpanded: {
    height: 'auto', // Allow the height to expand when selected
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3C3D37',
    textAlign: 'center',
  },
  cardDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#3C3D37',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  footerButton: {
    backgroundColor: '#B7B7B7',
    borderColor: '#1a202c',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#3C3D37',
    fontSize: 16,
  },
});