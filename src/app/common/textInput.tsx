import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import normalize from 'react-native-normalize';
import {color, theme, app_color, fonts} from '../../assets/themes/theme';
import {IconM} from '../common';

interface BoxInputProps {
  onChangeText: (value: any) => void;
  iconName?: any;
  placeholder: string;
  rightIcon?: string;
  leftIcon?: string;
  iconColor?: string;
  secureEntry?: boolean;
  isError?: boolean;
  keyboardType: any;
}

const BoxInput = ({
  rightIcon,
  leftIcon,
  onChangeText,
  placeholder,
  iconColor,
  isError,
  secureEntry,
  keyboardType,
}: BoxInputProps) => {
  const [text, setText] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return (
    <View
      style={[
        styles.txtInputWrapper,
        {
          borderColor: focus
            ? app_color.primaryButton
            : theme.color.input_placeholder,
        },
        isError ? {borderWidth: 1, borderColor: 'red'} : {},
      ]}>
      {leftIcon && <IconM name={leftIcon} color={iconColor} />}
      <TextInput
        secureTextEntry={secureEntry ?? false}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        style={[styles.txtInput, isError ? styles.error : {}]}
        placeholder={placeholder}
        onChangeText={value => onChangeText(value)}
        keyboardType={keyboardType ? keyboardType : ' default'}
      />
      {rightIcon && <IconM name={rightIcon} color={iconColor} />}
    </View>
  );
};

export {BoxInput};

BoxInput.defaultProps = {
  iconColor: color.lightBlack,
  keyboardType: 'default',
};

const styles = StyleSheet.create({
  txtInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: normalize(50),
    backgroundColor: theme.color.input_placeholder,
    borderRadius: normalize(12),
    paddingLeft: normalize(10),
    borderWidth: 1,
    marginVertical: normalize(10),
    // ,
  },
  txtInput: {
    paddingHorizontal: normalize(10),
    fontFamily: fonts.NunitoRegular,
    fontSize: theme.size.base,
  },
  error: {
    borderColor: 'red',
  },
});
