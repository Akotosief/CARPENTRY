import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { introduction, image } = route.params; // Retrieve the introduction and detail image from params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={image} // Use the passed detail image
          style={styles.image}
          resizeMode="cover"  
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.introduction}>
          {introduction} {/* Display the passed introduction */}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    padding: 30,
    margin: 0,
  },
  imageContainer: {
    height: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  contentContainer: {
    padding: 20,
    flex: 1,
  },
  introduction: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#C4D7FE',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 20,
    borderColor: '#3C3D37',
    borderWidth: 1,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});