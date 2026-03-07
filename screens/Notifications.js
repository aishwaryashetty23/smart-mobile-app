import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function Notifications() {

  const sendNotification = () => {
    Alert.alert("Notification", "This is a test notification!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <Button
        title="Trigger Test Notification"
        onPress={sendNotification}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});
