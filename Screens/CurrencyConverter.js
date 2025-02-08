import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { theme } from "../ThemeConstans/theme";

export const CurrencyConverter = ({ navigation }) => {
  const [Amt, setAmt] = useState("");
  const [currency, setCurrency] = useState("");
  const [convert, setConvert] = useState(null);
  const [description, setDescription] = useState("");

  const API_KEY = "a5bd1a9c13533d8671a40066"; // Replace with your valid API key
  const BASE_CURRENCY = "INR"; // Convert from INR to selected currency

  const fetchConversionRate = async () => {
    if (!Amt || isNaN(Amt)) {
      setDescription("Please enter a valid amount!");
      return;
    }

    if (!currency) {
      setDescription("Please enter a valid currency code!");
      return;
    }

    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`
      );
      const data = await response.json();

      if (
        data.conversion_rates &&
        data.conversion_rates[currency.toUpperCase()]
      ) {
        const rate = data.conversion_rates[currency.toUpperCase()];
        const convertedAmt = (Amt * rate).toFixed(2);
        setConvert(convertedAmt);
        setDescription(currency.toUpperCase());
      } else {
        setDescription("Invalid Currency Code");
        setConvert(null);
      }
    } catch (error) {
      setDescription("Error fetching exchange rate");
      setConvert(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Currency Converter</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Amount (INR)</Text>
        <TextInput
          style={styles.input}
          value={Amt}
          onChangeText={(text) => setAmt(text)}
          keyboardType="number-pad"
        />

        <Text style={styles.label}>Convert To (Currency Code)</Text>
        <TextInput
          style={styles.input}
          value={currency}
          onChangeText={(text) => setCurrency(text)}
          autoCapitalize="characters"
          keyboardType="default"
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={fetchConversionRate}>
          <Text style={styles.btnText}>Convert</Text>
        </TouchableOpacity>
      </View>

      {convert !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Amount: {convert} {description}
          </Text>
        </View>
      )}

      {description === "Invalid Currency Code" && (
        <Text style={styles.errorText}>⚠️ Please enter a valid currency code (e.g., USD, EUR)</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme().BGC,
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "#2c6975",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
   justifyContent: "center",
   height:80
   
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginLeft:40,
  },
  inputContainer: {
    margin: 20,
    width: "90%",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    paddingLeft: 15,
    height: 50,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    backgroundColor: "#cde0c9",
    marginBottom: 15,
  },
  btnContainer: {
    marginBottom: 20,
  },
  btn: {
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#68b2a0",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c6975",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default CurrencyConverter;
