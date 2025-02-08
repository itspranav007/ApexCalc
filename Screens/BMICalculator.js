import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../ThemeConstans/theme';

export const BmiCalculator = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [description, setDescription] = useState('');

  const calculateBmi = () => {
    try {
      if (!weight || !height) {
        Alert.alert('Error', 'Please enter valid weight and height');
        return;
      }
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
        Alert.alert('Error', 'Please enter positive numbers');
        return;
      }
      
      const bmiValue = weightNum / ((heightNum / 100) * (heightNum / 100));
      setBmi(bmiValue.toFixed(1));

      if (bmiValue <= 18.5) {
        setDescription('Underweight! Eat More...');
      } else if (bmiValue <= 24.9) {
        setDescription('Normal, Keep it Up...');
      } else if (bmiValue <= 29.9) {
        setDescription('Overweight, Consider Exercise...');
      } else {
        setDescription('Obese, Hit The GYM...');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() =>  navigation.navigate('Home')}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      
      <View style={styles.title}>
        <Text style={styles.titleText}>BMI Calculator</Text>
      </View>

      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder='Enter Weight in Kg'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder='Enter Height in cm'
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi ? `BMI: ${bmi}` : ''}</Text>
        <Text style={styles.result}>{description}</Text>
        <View style={styles.img}>
        {/*}  <Image
            source={{ uri: 'https://m.timesofindia.com/photo/59645926.cms' }}
            style={{ width: 350, height: 180 }}
          />*/}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:theme().BGC,
   
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: '#2c6975',
    padding: 10,
    borderRadius: 50,
  },
  title: {
    backgroundColor: '#2c6975',
    height:85,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Arial',
  },
  input: {
    height: 55,
    width: '90%',
    margin: 15,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#cde0c9',
    fontSize: 18,
    fontFamily: 'Arial',
  },
  button: {
    height: 50,
    width: '60%',
    margin: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#68b2a0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  resultView: {
    margin: 15,
    alignItems: 'center',
  },
  result: {
    fontSize: 25,
    color: '#2c6975',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  img: {
    marginTop: 35,
  },
});

export default BmiCalculator;
