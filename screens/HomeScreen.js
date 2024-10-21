import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params: { username, password } = {} } = route;
function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params: { username, password } = {} } = route;
 }
 const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/white.jpeg')} style={styles.imageBackground}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome {username}!</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Physical education is a vital part of our lives. It helps us develop our physical skills, achieve our fitness goals, and live a healthy lifestyle. It is also important for our mental well-being, as it helps us reduce stress and anxiety, and improve our mood. Furthermore, regular physical activity can help us increase our energy levels, reduce the risk of chronic diseases, and even improve our sleep quality. So, it is essential to make physical education a priority in our lives.</Text>
          </View>
          <View style={styles.contentContainer}>
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
                <Image source={require('../assets/team.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/team1.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/team2.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/team3.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/team4.jpg')} style={styles.photoSliderLarge} />
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
                <Image source={require('../assets/individual.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/individual1.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/individual2.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/individual3.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/individual4.jpg')} style={styles.photoSliderLarge} />
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
                <Image source={require('../assets/exe.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/exe1.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/exe2.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/exe3.jpg')} style={styles.photoSliderLarge} />
                <Image source={require('../assets/exe4.jpg')} style={styles.photoSliderLarge} />
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
      </ImageBackground>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    height: 300,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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