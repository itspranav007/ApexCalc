import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library (e.g., Ionicons)
import { theme } from "../ThemeConstans/theme";

const ProfileImage = require("../assets/ApexBig.jpeg");

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Background Image with flex 1 for top section */}
      <View style={styles.imageContainer}>
        <Image source={ProfileImage} style={styles.image} resizeMode="center" />
      </View>

      {/* Overlay for better visibility and Text Content */}
      <View style={styles.overlay}>
        {/* App Name & Version */}
        <Text style={styles.appTitle}>ApexCalc</Text>
        <Text style={styles.appDescription}>Simplify Your Calculations, Anytime, Anywhere</Text>
        <Text style={styles.version}>Version 1.0.0.0</Text>

        {/* Developer Details with Icon */}
        <View style={styles.devDetails}>
          <Ionicons name="person" size={20} color="#68b2a0" />
          <Text style={styles.text}>Developed By:</Text>
          <Text style={styles.highlight}> Apex App Development</Text>
        </View>

        {/* Developer Name with Icon */}
        <View style={styles.devDetails}>
          <Ionicons name="person-outline" size={20} color="#68b2a0" />
          <Text style={styles.text}>Developer:</Text>
          <Text style={styles.highlight}> Pranav Bhosale</Text>
        </View>

        {/* Technology Used with Icon */}
        <View style={styles.techDetails}>
          <Ionicons name="code-slash" size={20} color="#68b2a0" />
          <Text style={styles.text}>Tech Used:</Text>
          <Text style={styles.highlight}> React Native</Text>
        </View>

        {/* Copyright Info */}
        <View style={styles.copyrightSection}>
          <Text style={styles.copyright}>© 2024 Apex App Development</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme().HeaderBGC,
    padding: 10,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  imageContainer: {
    flex: 1,
    height: 200, 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Slightly rounded corners for better aesthetics
  },
  overlay: {
    flex: 2,
    backgroundColor: "black", // Slight transparency for a better overlay effect
    padding: 20,
    borderRadius: 15,
    alignItems: "flex-start",
    width: "100%",
    alignSelf: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  appDescription: {
    fontWeight: '500',
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  version: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 20,
  },
  devDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  techDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    color: "#ddd",
    fontWeight: "500",
    marginLeft: 10,
  },
  highlight: {
    fontSize: 20,
    color: "#68b2a0",
    fontWeight: "bold",
  },
  copyrightSection: {
    flex: 1,
    justifyContent: 'flex-end', 
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  copyright: {
    fontSize: 14,
    color: "#aaa",
    fontWeight: "500",
  },
});

export default Profile;
