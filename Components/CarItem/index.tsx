import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

interface props {
  name?: any;
  tagline?: any;
  taglineCTA?: any;
  image?: any;
  taglineCTA?: any;
}

const CarItem = (prop: props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={prop.image} style={styles.image} />
      <View style={styles.carcontainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>{prop.name}</Text>
          <Text style={styles.subtitle}>{prop.tagline} </Text>
          <Text style={styles.subtitleCTA}>{prop.taglineCTA}</Text>
        </View>
        <View style={styles.buttons}>
          <StyledButton
            color={'#56494E'}
            text={'custom order'}
            textcolor={'white'}
          />
          <StyledButton
            color={'#fff'}
            text={'existing inventory'}
            textcolor={'black'}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default CarItem;
