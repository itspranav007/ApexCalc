import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native"; // Import LottieView
import { theme } from "../ThemeConstans/theme";

const Mainscreen = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0); // Initial opacity of 0

  useEffect(() => {
    // Start the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade to full opacity
      duration: 2000, // 2 seconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("Home"); // Navigate to Home after 3 seconds
    },3000); // 5 seconds total (2 seconds for fade-in + 3 seconds display)

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation, fadeAnim]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Animation1.json")} // Replace with your animation file
        autoPlay
        loop
        style={styles.animation}
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        ApexCalc
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        Simplify Your Calculations, Anytime, Anywhere
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme().BGC,
    paddingHorizontal: 20,
  },
  animation: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    marginBottom: 20, // Increased space for better positioning
  },
  title: {
    fontSize: 50, // Increased size for app name
    fontWeight: "bold",
    color: "#333", // Darker text for better contrast
    fontFamily: "Arial", // Custom font family
    fontFamily: "Arial", // Custom font family
    textAlign: "center", // Center align the title
    marginBottom: 10, // Added margin for spacing
  },
  subtitle: {
    fontSize:15, // Increased font size for subtitle
    fontWeight: "900", // Lighter weight for subtitle
    color: "#555", // Darker color for subtitle
    fontFamily: "Arial", // Custom font family
    textAlign: "center", // Center align the subtitle
    paddingHorizontal: 30, // Added padding to make subtitle more readable
  },
});

export default Mainscreen;
