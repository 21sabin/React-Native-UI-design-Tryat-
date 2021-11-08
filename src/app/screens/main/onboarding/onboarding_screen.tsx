import React from 'react';
import { View, Text } from 'react-native';
import { Onboarding } from '../../../components';
import { SwipingIndicator, OnboardingHeader } from '../../../components';

export const OnboardingScreen = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <Onboarding {...props} />
    </View>
  );
};
