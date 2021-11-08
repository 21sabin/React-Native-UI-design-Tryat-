import React from 'react';
import {ButtonRNP, RNPText, Spacer} from '../../common/';
import {View, Image, StyleSheet, SwitchIOS} from 'react-native';
import {welcomeScreenStyle as ws} from '../../../assets/styles';
import {app_color} from '../../../assets/themes/theme';

import {useSelector} from 'react-redux';
interface props {
  navigation: any;
}

export const Welcome = ({navigation}: props) => {
  const authState = useSelector((state: any) =>
    console.log('auth sate', state),
  );
  return (
    <View style={ws.wrapper}>
      {/* Header title */}
      <View style={ws.header}>
        <RNPText title="Mero Momma" style={[ws.titleColor, ws.headerTitle]} />
        <Spacer />
        <RNPText
          title="An all purpose baby shopping and tracker"
          style={[ws.titleColor, ws.headerSubTitle]}
        />
      </View>
      {/* <Spacer space={40} /> */}
      {/* Image view */}
      <View style={ws.imageWrapper}>
        <Image
          source={require('../../../assets/images/mom.png')}
          style={ws.image}
        />
      </View>
      <View style={ws.btnWrapper}>
        <ButtonRNP
          style={ws.btnStyle}
          title="Login with existing account"
          labelColor={app_color.primaryButton}
          onPress={() => navigation.navigate('signin')}
        />
        <Spacer />
        <ButtonRNP
          style={ws.btnStyle}
          title="Create a new account"
          labelColor={app_color.primaryButton}
          onPress={() => navigation.navigate('signin')}
        />
        <Spacer space={20} />
        <ButtonRNP
          title="Continue as Guest"
          // labelColor={app_color.primaryButton}
          onPress={() => navigation.navigate('signin')}
        />
      </View>
    </View>
  );
};
