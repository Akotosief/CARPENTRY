import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const detailsData = {
  1: {
    title: 'Pipe Wrench',
    description: `A pipe wrench is an adjustable tool designed specifically for gripping and turning cylindrical objects, particularly pipes. It has serrated jaws for a secure grip.`,
    uses: [
      'Plumbing: Essential for loosening or tightening pipe fittings.',
      'HVAC Work: Used in heating and cooling system installations.',
      'Maintenance: Helpful for repairs involving plumbing fixtures.',
    ],
  },
  2: {
    title: 'Grass Cutter',
    description: `A grass cutter, often referred to as a lawn mower, is a machine used to trim grass and maintain lawns. It comes in various types, including manual push mowers and powered versions.`,
    uses: [
      'Lawn Maintenance: Keeping grass at an even height for aesthetic purposes.',
      'Landscaping: Shaping and maintaining grassy areas in gardens and parks.',
      'Farming: Used in agriculture for cutting grass or hay for livestock feed.',
    ],
  },
  3: {
    title: 'Cement Trowel',
    description: `A cement trowel is a flat tool with a handle used for spreading, smoothing, and shaping cement and mortar. It comes in various shapes, including rectangular and rounded.`,
    uses: [
      'Masonry: Applying mortar to bricks or stones.',
      'Finishing Concrete: Smoothing the surface of poured concrete.',
      'Plastering: Used in the application of plaster on walls.',
    ],
  },
  4: {
    title: 'Wood',
    description: `Wood is a versatile natural material derived from trees. It comes in various types, including hardwoods (like oak and maple) and softwoods (like pine and cedar).`,
    uses: [
      'Construction: Used for framing, flooring, and roofing in buildings.',
      'Furniture: Crafted into tables, chairs, and cabinetry.',
      'Craftsmanship: Utilized in woodworking projects, sculptures, and art.',
      'Fuel: Burned as firewood for heating and cooking.',
    ],
  },
  5: {
    title: 'Spirit Level',
    description: `A spirit level is a tool used to determine whether a surface is horizontal (level) or vertical (plumb). It contains a liquid-filled vial with an air bubble that indicates alignment.`,
    uses: [
      'Construction: Ensuring that walls, floors, and other structures are level.',
      'Carpentry: Used for setting shelves and furniture accurately.',
      'Landscaping: Checking the grade of outdoor surfaces.',
    ],
  },
  6: {
    title: 'Spanner',
    description: `A spanner, also known as a wrench, is a hand tool used for gripping, fastening, and turning nuts and bolts. It typically has a U-shaped opening at one or both ends.`,
    uses: [
      'Mechanical Work: Tightening or loosening nuts and bolts in machinery.',
      'Plumbing: Used for fittings and fixtures in pipes.',
      'Automotive Repair: Adjusting various components in vehicles.',
    ],
  },
};

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, image } = route.params; // Retrieve the id and detail image from params
  const { title, description, uses } = detailsData[id]; // Get the details based on ID

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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.introduction}>{description}</Text>
        <Text style={styles.usesTitle}>Uses:</Text>
        {uses.map((use, index) => (
          <Text key={index} style={styles.useItem}>{`- ${use}`}</Text>
        ))}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  introduction: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  usesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  useItem: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 5,
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