import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../ThemeConstans/theme';

const GSTCalculator = () => {
  const navigation = useNavigation();
  const [price, setPrice] = useState('');
  const [gstRate, setGstRate] = useState(18); // Default GST rate
  const [gstAmount, setGstAmount] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [cgst, setCgst] = useState(null);
  const [sgst, setSgst] = useState(null);

  const calculateGST = () => {
    if (!price) {
      alert('Please enter the price');
      return;
    }

    const gstValue = (parseFloat(price) * gstRate) / 100;
    const totalPrice = parseFloat(price) + gstValue;
    const halfGst = gstValue / 2; // CGST and SGST are equal

    setGstAmount(gstValue.toFixed(2));
    setFinalPrice(totalPrice.toFixed(2));
    setCgst(halfGst.toFixed(2));
    setSgst(halfGst.toFixed(2));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>GST Calculator</Text>
      </View>

      {/* Input Price */}
      <TextInput
        style={styles.input}
        placeholder="Enter Price (₹)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        placeholderTextColor="gray"
      />

      {/* GST Selection */}
      <View style={styles.gstContainer}>
        {[3, 5, 12, 18, 28].map((rate) => (
          <TouchableOpacity
            key={rate}
            style={[styles.gstButton, gstRate === rate && styles.selectedGst]}
            onPress={() => setGstRate(rate)}
          >
            <Text style={styles.gstText}>{rate}%</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.btn} onPress={calculateGST}>
        <Text style={styles.btnText}>Calculate GST</Text>
      </TouchableOpacity>

      {/* Results */}
      {finalPrice && gstAmount && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>GST Amount: ₹{gstAmount}</Text>
          <Text style={styles.resultText}>CGST: ₹{cgst}</Text>
          <Text style={styles.resultText}>SGST: ₹{sgst}</Text>
          <Text style={styles.finalPriceText}>Final Price: ₹{finalPrice}</Text>
        </View>
      )}
    </View>
  );
};

export default GSTCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme().BGC,
  //  padding: 20,
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
  input: {
    height: 50,
    width: '90%',
    borderColor:'gray',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor:theme().inputBGC,
    marginTop: 30,
  },
  gstContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '90%',
  },
  gstButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 8,
    borderColor:'black',
    borderWidth:0.5
    },
  selectedGst: {
    backgroundColor: '#007BFF',
  },
  gstText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  btn: {
    height: 50,
    width: '50%',
    backgroundColor:theme().btnbgc,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  finalPriceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 10,
  },
});
