import React from 'react';
import {View, StyleSheet, StatusBar, CameraRoll} from 'react-native';
import CarList from './Components/CarList';
import Header from './Components/HeadBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
