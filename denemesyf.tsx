import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import QuestionService from './Service/api.js';

export default class denemesyf extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1, width: '100%', height: '100%'}}>
          <View style={{alignItems: 'center', marginTop: 25}}>
            <Text>{QuestionService}</Text>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    height: 400,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
