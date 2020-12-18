import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

interface Items {
  color?: any;
  text?: string;
  textcolor?: any;
}

const StyledButton = (item: Items) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: item.color}]}
        onPress={() => {
          console.warn('Hey there');
        }}>
        <Text style={[styles.text, {color: item.textcolor}]}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
