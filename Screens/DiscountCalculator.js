import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for arrow icon
import { useNavigation } from '@react-navigation/native'; // For navigation
import { theme } from '../ThemeConstans/theme';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const [savings, setSavings] = useState(null);

  const navigation = useNavigation(); // To use navigation

  const calculateDiscount = () => {
    if (!originalPrice || !discountPercentage) {
      alert('Please enter both original price and discount percentage!');
      return;
    }

    const discountAmount = (parseFloat(originalPrice) * parseFloat(discountPercentage)) / 100;
    const finalPriceValue = parseFloat(originalPrice) - discountAmount;

    setSavings(discountAmount.toFixed(2));
    setFinalPrice(finalPriceValue.toFixed(2));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discount Calculator</Text>
      </View>

      <View style={styles.formContainer}>
        {/* Input for Original Price */}
        <TextInput
          style={styles.input}
          placeholder="Enter original price (₹)"
          value={originalPrice}
          onChangeText={setOriginalPrice}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        {/* Input for Discount Percentage */}
        <TextInput
          style={styles.input}
          placeholder="Enter discount percentage (%)"
          value={discountPercentage}
          onChangeText={setDiscountPercentage}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        {/* Calculate Button */}
        <TouchableOpacity style={styles.btn} onPress={calculateDiscount}>
          <Text style={styles.btnText}>Calculate Discount</Text>
        </TouchableOpacity>
      </View>

      {/* Result: Final Price and Savings */}
      {finalPrice && savings && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Final Price: ₹{finalPrice}</Text>
          <Text style={styles.resultText}>You Save: ₹{savings}</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme().BGC,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:theme().HeaderBGC,
    paddingVertical: 15,
    paddingHorizontal: 20,
    zIndex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
    letterSpacing: 1,
  },
  formContainer: {
   
    marginTop: 30, // Adding space at the top
    left:50,
  },
  input: {
    height: 50,
    width: '70%', // Adjusting width to take up more space
    borderColor: '#bbb',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor:theme().inputBGC,
    elevation: 3,
  },
  btn: {
    height: 50,
    width: '40%', // Slightly wider button
    backgroundColor: '#68b2a0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    elevation: 3,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c6975',
    marginBottom: 10,
  },
});

export default DiscountCalculator;
