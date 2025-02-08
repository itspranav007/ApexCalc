import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Correct Ionicons import
import { useNavigation } from "@react-navigation/native";
import { theme } from "../ThemeConstans/theme";

const Home = () => {
  const navigation = useNavigation();

  const handleBMICalculator = () => {
    navigation.navigate("BMICalculator");
  };

  const handleCurrencyConverter = () => {
    navigation.navigate("CurrencyConverter");
  };

  const handleAgeCalculator = () => {
    navigation.navigate("AgeCalculator");
  };

  const handleDiscountCalculator = () => {
    navigation.navigate("DiscountCalculator");
  };

  const handleLoanCalculator = () => {
    navigation.navigate("LoanCalculator");
  };

  const handleGSTCalculator = () => {
    navigation.navigate("GSTCalculator");
  };

  const handleTimeConverter = () => {
    navigation.navigate("TimeConverter");
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ApexCalc</Text>
        <TouchableOpacity onPress={handleProfile}>
          <Ionicons name="person-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#28a745" }]}
        onPress={handleBMICalculator}
      >
        <Ionicons name="calculator-outline" size={20} color="black" />
        <Text style={styles.buttonText}>BMI Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#007BFF" }]}
        onPress={handleCurrencyConverter}
      >
        <Ionicons name="wallet-outline" size={20} color="black" />
        <Text style={styles.buttonText}>Currency Converter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ffc107" }]}
        onPress={handleAgeCalculator}
      >
        <Ionicons name="person-outline" size={20} color="black" />
        <Text style={styles.buttonText}>Age Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#17a2b8" }]}
        onPress={handleDiscountCalculator}
      >
        <Ionicons name="pricetag-outline" size={20} color="black" />
        <Text style={styles.buttonText}>Discount Calculator</Text>
      </TouchableOpacity>

      {/* New Buttons */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#dc3545" }]}
        onPress={handleLoanCalculator}
      >
        <Ionicons name="cash-outline" size={20} color="black" />
        <Text style={styles.buttonText}>Loan Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#BA55D3" }]}
        onPress={handleGSTCalculator}
      >
        <Ionicons name="reader-outline" size={20} color="black" />
        <Text style={styles.buttonText}>GST Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#CD853F" }]}
        onPress={handleTimeConverter}
      >
        <Ionicons name="time-outline" size={20} color="black" />
        <Text style={styles.buttonText}>World Clock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme().BGC,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Arial", // Replace with your preferred font family
    color: "#000", // Title text color black
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    elevation: 5, // Add shadow effect for better emphasis on button
  },
  buttonText: {
    color: "Black", // White text for contrast
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Arial", // Replace with your preferred font family
    fontWeight: "bold", // Bold text
  },
});
