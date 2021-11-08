import React from 'react';
import { View, Text } from 'react-native';
import {
  locationScreenStyle as ls,
  onboardingCommonStyle as cs,
  onboardingWelcomeStyle as ows,
} from '../../../../assets/styles/';
import { RNPText, Spacer, Card, CustomButton } from '../../../common';

export const Location = (props: any) => {
  const { handleNext, navigation } = props;
  return (
    <View style={ls.wrapper}>
      <View style={ls.heading}>
        <RNPText title="Location" style={cs.title} />
        <Spacer />
        <View style={{ width: '90%' }}>
          <RNPText
            style={cs.subTitle}
            title={`Let us know your location and we \nprovide you details of hospitals, \ngynecologists in your area.
              `}
          />
        </View>
      </View>
      <CustomButton title="Next" onPress={handleNext} rightIcon="arrow-right" />
    </View>
  );
};
