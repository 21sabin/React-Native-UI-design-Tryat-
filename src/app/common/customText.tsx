import React from 'react';
import {Text} from 'react-native-paper';

interface TxtProps {
  title: String;
  style?: any;
}

export const RNPText = ({title, style}: TxtProps) => {
  return <Text style={style ? style : {}}>{title}</Text>;
};
