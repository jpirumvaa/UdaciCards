import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import styles from './utils/styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from my awesome App: UdaciCards</Text>
      <StatusBar style='auto'/>
    </View>
  );
}