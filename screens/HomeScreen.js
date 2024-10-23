import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params: { username, password } = {} } = route;
 const [currentIndex, setCurrentIndex] = useState(1);
  
 return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/set.png')}
        resizeMode="cover"
        style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      ></ImageBackground>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome {username}!</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
          <Image source={require('../assets/ramen.jpg')} style={styles.image} />
            <Text style={styles.text}>Physical education is a vital part of our lives. It helps us develop our physical skills, achieve our fitness goals, and live a healthy lifestyle. It is also important for our mental well-being, as it helps us reduce stress and anxiety, and improve our mood. Furthermore, regular physical activity can help us increase our energy levels, reduce the risk of chronic diseases, and even improve our sleep quality. So, it is essential to make physical education a priority in our lives.</Text>
          </View>
          <View style={styles.contentContainer}>
          <Image source={require('../assets/mcdo.jpg')} style={styles.image} />
            <Text style={styles.text}>In addition to these benefits, physical education also helps us build our social skills, as it provides us with the opportunity to interact with other people, make new friends, and develop our communication skills. It also helps us learn important values such as teamwork, discipline, and sportsmanship.</Text>
          </View>
          <View style={styles.activityContainer}>
            <Text style={styles.activity}>Team Sports:</Text>
            <Text style={styles.activity}>Basketball, Volleyball, Soccer, etc.</Text>
            <View style={styles.photoSliderContainer}>
              <ScrollView  horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={({ nativeEvent }) => {
                  const index = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width) + 1;
                  setCurrentIndex(index);
                }}
                scrollEventThrottle={16}>
                <Image source={require('../assets/ef.png')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ef.png')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ef.png')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ef.png')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ef.png')} style={styles.photoSliderLarge} />
              </ScrollView>
              <View style={styles.indicatorContainer}>
                <Text style={styles.indicatorText}>{currentIndex}/5</Text>
              </View>
            </View>
          </View>
          <View style={styles.activityContainer}>
            <Text style={styles.activity}>Individual Sports:</Text>
            <Text style={styles.activity}>Running, Swimming, Tennis, etc.</Text>
            <View style={styles.photoSliderContainer}>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={({ nativeEvent }) => {
                  const index = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width) + 1;
                  setCurrentIndex(index);
                }}
                scrollEventThrottle={16}>
                <Image source={require('../assets/mcdo.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/mcdo.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/mcdo.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/mcdo.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/mcdo.jpg')} style={styles.photoSliderLarge} />
              </ScrollView>
              <View style={styles.indicatorContainer}>
                  <Text style={styles.indicatorText}>{currentIndex}/5</Text>
              </View>
            </View>
          </View>
          <View style={styles.activityContainer}>
            <Text style={styles.activity}>Exercise:</Text>
            <Text style={styles.activity}>Weightlifting, Yoga, Pilates, etc.</Text>
            <View style={styles.photoSliderContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={({ nativeEvent }) => {
                  const index = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width) + 1;
                  setCurrentIndex(index);
                }}
                scrollEventThrottle={16}>
                <Image source={require('../assets/ramen.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ramen.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ramen.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ramen.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/ramen.jpg')} style={styles.photoSliderLarge} />
              </ScrollView>
              <View style={styles.indicatorContainer}>
                <Text style={styles.indicatorText}>{currentIndex}/5</Text>
              </View>
            </View>
          </View>


        </ScrollView>
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
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  welcomeContainer: {
    backgroundColor: 'rgba(140, 26, 98, 0.33)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    textAlign: 'center',
  },
  welcomeText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'rgba(140, 26, 98, 0.33)',
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
  activityContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(140, 26, 98, 0.33)',
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
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});