import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerIcon}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>Back to Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.button}>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
  },
  hamburgerIcon: {
    padding: 10,
  },
  menu: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: '#C4D7FF',
    borderRadius: 10,
    padding: 10,
    zIndex: 1,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
  },
});

export default Navbar;