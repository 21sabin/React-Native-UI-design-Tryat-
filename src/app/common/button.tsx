import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { normalize } from '../utilities/utils';
import { app_color } from '../../assets/themes/theme';
import { IconM, RNPText, Spacer } from '../common';

interface style {
  [key: string]: string | number;
}

interface BtnProps {
  title: String;
  onPress: () => any;
  style?: style;
  labelColor?: any;
  leftIcon?: string;
  rightIcon?: string;
}

export const ButtonRNP = ({
  onPress,
  title,
  leftIcon,
  style,
  labelColor,
}: BtnProps) => (
  <Button
    icon={leftIcon ?? ''}
    mode="contained"
    uppercase={false}
    onPress={onPress}
    style={[style ? style : styles.defaultBtnStyle, styles.default]}
    labelStyle={{ color: labelColor ?? '#fff' }}>
    {title}
  </Button>
);

export const CustomButton = ({
  onPress,
  title,
  leftIcon,
  style,
  labelColor,
  rightIcon,
}: BtnProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.default, styles.defaultBtnStyle, styles.customBtn, style]}>
    <RNPText title={title} style={[styles.customBtnText, labelColor && { color: labelColor }]} />
    <Spacer width={true} space={5} />
    {rightIcon && <IconM name={rightIcon} color="#fff" size={normalize(20)} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  defaultBtnStyle: {
    backgroundColor: app_color.primaryButton,
  },
  default: {
    width: normalize(300),
    borderRadius: normalize(12),
    paddingVertical: normalize(7),
  },
  customBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: normalize(15),
    alignItems: 'center',
  },
  customBtnText: {
    color: '#fff',
  },
});
