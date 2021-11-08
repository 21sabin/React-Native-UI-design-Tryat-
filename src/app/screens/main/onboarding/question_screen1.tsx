import React from 'react';
import {View} from 'react-native';
import {
  onboardingCommonStyle as ocs,
  questionScreenStyle as qs,
} from '../../../../assets/styles/';
import {
  RNPText,
  Spacer,
  ButtonRNP,
  CustomButton,
  MyDatePicker,
} from '../../../common';
import {navigate, goBack} from '../../../utilities/navigationRef';

interface Props {
  handleNext: () => void;
}

export const QuestionScreen1 = ({handleNext}: Props) => {
  console.log('handleNe', handleNext);
  return (
    <View style={[ocs.wrapper, qs.container]}>
      <View style={qs.heading}>
        <RNPText title="Congratulations" style={ocs.title} />
        <Spacer />
        <View style={{width: '90%'}}>
          <RNPText style={ocs.subTitle} title="When is your due date" />
        </View>
      </View>
      {/* date selector */}
      <View style={qs.dateWrapper}>
        <View style={qs.datePicker}>
          <MyDatePicker />
          <Spacer space={30} />
          <RNPText
            style={qs.text}
            title={` I dont't know my due date and \n need to estimate it`}
          />
        </View>
        <CustomButton
          title="Next"
          onPress={handleNext}
          rightIcon="arrow-right"
        />
      </View>
    </View>
  );
};
