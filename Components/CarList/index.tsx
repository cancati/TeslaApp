import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        data={cars}
        renderItem={({item}) => (
          <CarItem
            image={item.image}
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
          />
        )}
      />
    </View>
  );
};

export default CarList;
