import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity style={styles.menuIcon}>
        <Feather name="more-vertical" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuIcon: {
    padding: 10,
  },
});

export default Header;
