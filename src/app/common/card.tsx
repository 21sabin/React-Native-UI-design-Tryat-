import React from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../../assets/themes/theme';
import {normalize} from '../../app/utilities/utils';

interface CardProps {
  style?: any;
  children?: any;
}

const Card = ({children, style}: CardProps) => {
  console.log('style', style);
  return <View style={[styles.card, style]}>{children}</View>;
};

export {Card};

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.greyLight,
    borderRadius: normalize(34),
    width: normalize(249),
    height: normalize(188),
  },
});
