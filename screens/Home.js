import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>

      <Text style={styles.subtitle}>
        This is the Home Screen
      </Text>

      <Button title="View Details" onPress={() => {}} />

      <Button title="Favorites" onPress={() => {}} />

      <Button title="Profile" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20
  }
});
