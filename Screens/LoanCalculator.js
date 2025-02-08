import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {theme} from '../ThemeConstans/theme'


const LoanCalculator = () => {
  const navigation = useNavigation();
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateLoan = () => {
    if (!principal || !interestRate || !tenure) {
      alert('Please fill in all fields');
      return;
    }

    const P = parseFloat(principal);
    const R = parseFloat(interestRate) / 100;
    const T = parseFloat(tenure);

    const interest = P * R * T; // Simple Interest Formula
    const total = P + interest;

    setTotalInterest(interest.toFixed(2));
    setTotalAmount(total.toFixed(2));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Loan Calculator</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="currency-inr" size={24} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="Principal Amount (₹)"
          keyboardType="numeric"
          value={principal}
          onChangeText={setPrincipal}
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="percent" size={24} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="Interest Rate (%)"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="calendar-clock" size={24} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="Loan Tenure (Years)"
          keyboardType="numeric"
          value={tenure}
          onChangeText={setTenure}
          placeholderTextColor="gray"
        />
      </View>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.button} onPress={calculateLoan}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {/* Results */}
      {totalAmount && totalInterest && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Principal Amount: ₹{principal}</Text>
          <Text style={styles.resultText}>Total Interest: ₹{totalInterest}</Text>
          <Text style={styles.finalAmount}>Total Amount to Pay: ₹{totalAmount}</Text>
        </View>
      )}
    </View>
  );
};

export default LoanCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme().BGC,
   // padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:theme().HeaderBGC,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
    left:30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:theme().inputBGC,
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 10,
    width: '90%',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    paddingLeft: 10,
    color: 'black',
  },
  button: {
    height: 50,
    width: '50%',
    backgroundColor:theme().btnbgc,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  finalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 10,
  },
});
