import React from 'react';
import { View, Image } from 'react-native';
import {
  onboardingCommonStyle as ocs,
  onboardingWelcomeStyle as ows,
} from '../../../../assets/styles/';
import { RNPText, Spacer, Card, CustomButton } from '../../../common';
interface Props {
  handleNext: () => void;
}

export const Welcome = ({ handleNext }: Props) => {
  return (
    <View style={ocs.wrapper}>
      {/* welcome message */}
      <View style={ows.titleWrapper}>
        <RNPText title="Welcome, Sameera" style={ocs.title} />
        <Spacer />
        <RNPText
          style={ocs.subTitle}
          title="To ensure the best experience, we need a bit of information from you"
        />
      </View>
      {/* select your pregnancy state */}
      <View style={ows.body}>
        <RNPText title="Please choose one" />
        <Spacer space={20} />
        <Card style={ows.cardStyle}>
          <Image
            source={require('../../../../assets/images/Baby_Pregnant.png')}
          />
          <Spacer space={20} />
          <RNPText style={ows.textStyle} title="I am expecting" />
        </Card>
        <Spacer />
        <Card style={ows.cardStyle}>
          <Image
            source={require('../../../../assets/images/Baby_Mother.png')}
          />
          <Spacer space={20} />
          <RNPText style={ows.textStyle} title="I have a newborn" />
        </Card>
        <CustomButton
          title="Next"
          onPress={handleNext}
          rightIcon="arrow-right"
        />
      </View>
    </View>
  );
};
