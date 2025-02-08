import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';  // Use FontAwesome icons
import { useNavigation } from '@react-navigation/native';
import moment from 'moment-timezone';
import { theme } from '../ThemeConstans/theme';

const WorldClock = () => {
  const navigation = useNavigation();
  const [currentTimes, setCurrentTimes] = useState({});

  const timezones = [
    { name: 'Asia/Kolkata', flag: '🇮🇳', city: 'India (Kolkata)' },
    { name: 'America/New_York', flag: '🇺🇸', city: 'New York' },
    { name: 'Europe/London', flag: '🇬🇧', city: 'London' },
    { name: 'Asia/Tokyo', flag: '🇯🇵', city: 'Tokyo' },
    { name: 'Australia/Sydney', flag: '🇦🇺', city: 'Sydney' },
    { name: 'America/Los_Angeles', flag: '🇺🇸', city: 'Los Angeles' },
    { name: 'Europe/Paris', flag: '🇫🇷', city: 'Paris' },
    { name: 'Asia/Dubai', flag: '🇦🇪', city: 'Dubai' },
    { name: 'Africa/Nairobi', flag: '🇰🇪', city: 'Nairobi' },
    { name: 'America/Toronto', flag: '🇨🇦', city: 'Toronto' },
    { name: 'Asia/Seoul', flag: '🇰🇷', city: 'Seoul' },
    { name: 'Europe/Berlin', flag: '🇩🇪', city: 'Berlin' },
    { name: 'America/Chicago', flag: '🇺🇸', city: 'Chicago' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const times = {};
      timezones.forEach(({ name, city }) => {
        times[city] = moment.tz(name).format('HH:mm A');
      });
      setCurrentTimes(times);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={30} color="white" />
          
        </TouchableOpacity>
        <FontAwesome name="clock-o" size={30} color="white" style={styles.clockIcon} />
        <Text style={styles.headerTitle}>World Clock</Text>
      </View>

      {/* Scrollable World Clock Times */}
      <ScrollView contentContainerStyle={styles.clockContainer}>
        {timezones.map(({ name, flag, city }) => (
          <View key={name} style={styles.clockItem}>
            <Text style={styles.clockText}>
             
              {' '}{flag} {city}: {currentTimes[city] || '--:--'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WorldClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme().BGC,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme().HeaderBGC,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  backButton: {
    padding: 10,
    paddingRight: 90,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  clockContainer: {
    flexGrow: 1,
    width: '100%',
    paddingBottom: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  clockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10, // Increased space between items
    backgroundColor: theme().inputBGC,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    height: 80, // Adjusted height for better visibility
  },
  clockText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  
});
