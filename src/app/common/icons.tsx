import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {normalize} from '../utilities/utils';

interface IconPropType {
  name: string;
  size?: any;
  color?: string | undefined;
  style?: any;
}

const defaultSize = normalize(24);

export const IconM = ({name, size, color, style}: IconPropType) => {
  return (
    <MaterialCommunityIcons
      name={name}
      style={style}
      size={size ?? defaultSize}
      color={color ?? 'blue'}
    />
  );
};

export const IconF = ({name, size, color, style}: IconPropType) => {
  return (
    <FontAwesomeIcons
      name={name}
      style={style}
      size={size ?? defaultSize}
      color={color ?? 'blue'}
    />
  );
};
