import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingRow}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={(value) => setNotifications(value)}
        />
      </View>

      <View style={styles.settingRow}>
        <Text>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
