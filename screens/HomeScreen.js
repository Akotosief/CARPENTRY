import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params: { username } = {} } = route; // Extract username from params
  const [currentIndex, setCurrentIndex] = useState(1);

  const libraryItems = [
    {
      id: 1,
      homeImage: require('../assets/ramen.jpg'),
      detailImage: require('../assets/ef.png'),
      introduction: 'Introduction for library item 1: A delicious ramen dish.',
    },
    {
      id: 2,
      homeImage: require('../assets/ramen.jpg'),
      detailImage: require('../assets/mcdo.jpg'),
      introduction: 'Introduction for library item 2: A spicy ramen experience.',
    },
    {
      id: 3,
      homeImage: require('../assets/ramen.jpg'),
      detailImage: require('../assets/ef.png'),
      introduction: 'Introduction for library item 3: A vegetarian ramen option.',
    },
    {
      id: 4,
      homeImage: require('../assets/ramen.jpg'),
      detailImage: require('../assets/mcdo.jpg'),
      introduction: 'Introduction for library item 4: A rich and creamy broth.',
    },
    {
      id: 5,
      homeImage: require('../assets/ramen.jpg'),
      detailImage: require('../assets/ef.png'),
      introduction: 'Introduction for library item 5: A ramen dish with seafood.',
    },
    {
      id: 6,
      homeImage: require('../assets/ramen.jpg'),
      detailImage: require('../assets/mcdo.jpg'),
      introduction: 'Introduction for library item 6: A classic tonkotsu ramen.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/white.jpg')}
        resizeMode="cover"
        style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <ScrollView style={styles.scrollView}>
      <Image source={require('../assets/welcome.png')} style={{ position: 'absolute', width: '18%', height: '3%', left: 139,bottom: 0, top: 35, alignSelf: 'left', flex: 0 }}
        repeat={true} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome {username}!</Text>
        </View>

        {/* Library Section with Dynamic Items */}
        {libraryItems.map(item => (
          <View key={item.id} style={styles.library}>
            <View style={styles.content}>
              <Image source={item.homeImage} style={styles.photolibrary} />
              <View style={styles.divider} />
              <View style={styles.textContainer}>
                <Text style={styles.definition}>{item.introduction}</Text>
                <View style={styles.readContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Details', {
                        introduction: item.introduction,
                        image: item.detailImage,
                      })
                    }
                    style={styles.morebutton}
                  >
                    <Text style={styles.readText}>Read More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Additional Content */}
        <View style={styles.contentContainer}>
          <Image source={require('../assets/ramen.jpg')} style={styles.image} />
          <Text style={styles.text}>
            Physical education is a vital part of our lives. It helps us develop our physical skills, achieve our fitness goals, and live a healthy lifestyle.
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Image source={require('../assets/mcdo.jpg')} style={styles.image} />
          <Text style={styles.text}>
            In addition to these benefits, physical education also helps us build our social skills, as it provides us with the opportunity to interact with others.
          </Text>
        </View>

        {/* Activities Section */}
        <ActivitiesSection title="Team Sports" images={[require('../assets/ef.png'), require('../assets/ef.png'), require('../assets/ef.png')]} />
        <ActivitiesSection title="Individual Sports" images={[require('../assets/mcdo.jpg'), require('../assets/mcdo.jpg'), require('../assets/mcdo.jpg')]} />
        <ActivitiesSection title="Exercise" images={[require('../assets/ramen.jpg'), require('../assets/ramen.jpg'), require('../assets/ramen.jpg')]} />
      </ScrollView>

      {/* Fixed Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.button}>
          <Text style={styles.buttonText}>About us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const ActivitiesSection = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <View style={styles.activityContainer}>
      <Text style={styles.activity}>{title}:</Text>
      <View style={styles.photoSliderContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={({ nativeEvent }) => {
            const index = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width) + 1;
            setCurrentIndex(index);
          }}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.photoSliderLarge} />
          ))}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          <Text style={styles.indicatorText}>{currentIndex}/{images.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  welcomeContainer: {
    backgroundColor: '#B7B7B7',
    padding: 10,
    margin: 110,
    width: 300,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
    right: 80,
  },
  welcomeText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#B7B7B7',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  library: {
    marginVertical: 3,
    backgroundColor: '#B7B7B7',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 1,
    paddingVertical: 5,
    
  },
  photolibrary: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
    left: 5,
  },
  divider: {
    width: 2,
    backgroundColor: '#3C3D37',
    opacity: 0.5,
    height: '110%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  definition: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 5,
    right: 15,
  },
  readContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },
  morebutton: {
    backgroundColor: '#C4D7FE',
    borderRadius: 8,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3C3D37',
  },
  readText: {
    color: '#3C3D37',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#C4D7FE',
    borderWidth: 1,
    borderColor: '#1a202c',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#B7B7B7',
    borderRadius: 20,
  },
  activity: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
  },
  photoSliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  photoSliderLarge: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
    width: 300,
    height: 250,
    margin: 20,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    color: '#fff',
    fontSize: 14,
  },
});