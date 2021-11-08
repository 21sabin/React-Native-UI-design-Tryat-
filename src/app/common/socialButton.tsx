import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {app_color, fonts} from '../../assets/themes/theme';
import {normalize} from '../../app/utilities/utils';

interface SocialButtonProps {
  title: string;
  btnImage: any;
  onPress: () => void;
  style?: any;
}

const SocialButton = ({title, btnImage, onPress, style}: SocialButtonProps) => {
  return (
    <TouchableOpacity style={[styles.socialBtn]} onPress={onPress}>
      <Image style={styles.socialBtnImage} source={btnImage} />
      <Text style={styles.socialBtnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export {SocialButton};

const styles = StyleSheet.create({
  socialBtn: {
    backgroundColor: app_color.secondaryButton,
    flexDirection: 'row',
    paddingHorizontal: normalize(2),
    width: normalize(170),
    paddingVertical: normalize(10),
    borderColor: '#a5a5a5',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    height: normalize(40),
  },
  socialBtnImage: {
    width: normalize(20),
    height: normalize(20),
  },
  socialBtnTxt: {
    fontWeight: 'bold',
    fontSize: normalize(14),
    color: 'black',
    fontFamily: fonts.NunitoBold,
  },
});
