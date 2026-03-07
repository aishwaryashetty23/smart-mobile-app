import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />

      <Text style={styles.title}>Item Details</Text>

      <Text style={styles.description}>
        This screen displays detailed information about a selected item.
        Users can read more about the item here.
      </Text>

      <Button title="Add to Favorites" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  }
});
