import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { theme } from '../ThemeConstans/theme';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [ageSummary, setAgeSummary] = useState(null);
  const [nextBirthday, setNextBirthday] = useState(null);

  const navigation = useNavigation(); // To use the navigation

  const calculateAge = () => {
    if (!birthdate) {
      alert('Please enter your birthdate!');
      return;
    }

    const birthDateMoment = moment(birthdate, 'YYYY-MM-DD');
    const currentMoment = moment();

    // Calculate age in years, months, weeks, etc.
    const ageYears = currentMoment.diff(birthDateMoment, 'years');
    const ageMonths = currentMoment.diff(birthDateMoment, 'months') % 12;
    const ageWeeks = currentMoment.diff(birthDateMoment, 'weeks') % 4;
    const ageDays = currentMoment.diff(birthDateMoment, 'days') % 7;
    const ageHours = currentMoment.diff(birthDateMoment, 'hours') % 24;
    const ageMinutes = currentMoment.diff(birthDateMoment, 'minutes') % 60;

    setAgeSummary({
      years: ageYears,
      months: ageMonths,
      weeks: ageWeeks,
      days: ageDays,
      hours: ageHours,
      minutes: ageMinutes,
    });

    // Calculate the next birthday
    const nextBirthdayDate = moment(birthDateMoment).add(ageYears + 1, 'years');
    setNextBirthday({
      dayOfWeek: nextBirthdayDate.format('dddd'),
      year: nextBirthdayDate.year(),
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Age Calculator</Text>
          </View>

          {/* Input for Birthdate */}
          <TextInput
            style={styles.input}
            placeholder="Enter your birthdate (YYYY-MM-DD)"
            value={birthdate}
            onChangeText={setBirthdate}
            keyboardType="numeric"
          />

          {/* Calculate Button */}
          <TouchableOpacity style={styles.btn} onPress={calculateAge}>
            <Text style={styles.btnText}>Calculate Age</Text>
          </TouchableOpacity>

          {/* Age Summary */}
          {ageSummary && (
            <View style={styles.summaryContainer}>
              <Text style={styles.ageText}>
                {ageSummary.years} <Text style={styles.subtitle}>Years</Text>
              </Text>
              <Text style={styles.ageText}>
                {ageSummary.months} <Text style={styles.subtitle}>Months</Text>
              </Text>
              <Text style={styles.ageText}>
                {ageSummary.weeks} <Text style={styles.subtitle}>Weeks</Text>
              </Text>
              <Text style={styles.ageText}>
                {ageSummary.days} <Text style={styles.subtitle}>Days</Text>
              </Text>
              <Text style={styles.ageText}>
                {ageSummary.hours} <Text style={styles.subtitle}>Hours</Text>
              </Text>
              <Text style={styles.ageText}>
                {ageSummary.minutes} <Text style={styles.subtitle}>Minutes</Text>
              </Text>

              {/* Next Birthday Information */}
              {nextBirthday && (
                <View style={styles.nextBirthdayContainer}>
                  <Text style={styles.nextBirthdayText}>
                    Your next birthday is on {nextBirthday.dayOfWeek}, {nextBirthday.year}.
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Calendar Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="calendar" size={50} color="black" />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme().BGC,
    //alignItems: 'center',
    justifyContent: 'flex-start',
  //  / padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme().HeaderBGC,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: theme().inputBGC,
    alignSelf:'center'
  },
  btn: {
    height: 50,
    width: '80%',
    backgroundColor: theme().btnbgc,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
    alignSelf:'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  ageText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c6975',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#68b2a0',
  },
  nextBirthdayContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  nextBirthdayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c6975',
  },
  iconContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AgeCalculator;
