import React from 'react';
import { View, Text } from 'react-native';
import {
  readyScreenStyle as rs,
  onboardingWelcomeStyle as ows,
} from '../../../../assets/styles/';
import { RNPText, Spacer, Card, CustomButton } from '../../../common';

export const Ready = (props: any) => {
  const { navigation } = props;
  return (
    <View style={rs.wrapper}>
      <View style={rs.heading}>
        <RNPText title="We're ready" style={ows.title} />
        <Spacer />
        <View style={{ width: '90%' }}>
          <RNPText
            style={ows.subTitle}
            title="Welcome to the beautiful journey of motherhood!"
          />
        </View>
      </View>
      <View style={rs.body}>
        <Card style={rs.card} />
        <CustomButton title="start" onPress={() => { navigation.navigate('main') }} />
      </View>
    </View>
  );
};
