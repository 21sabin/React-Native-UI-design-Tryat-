import React from 'react';
import {View, Text} from 'react-native';
import {
  onboardingCommonStyle as ocs,
  questionScreenStyle as qs,
} from '../../../../assets/styles/';
import {RNPText, Spacer, CustomButton, MyDatePicker} from '../../../common';

interface Props {
  handleNext: () => void;
}

export const QuestionScreen2 = ({handleNext}: Props) => {
  return (
    <View style={[ocs.wrapper, qs.container]}>
      <View style={qs.heading}>
        <RNPText title="Congratulations" style={ocs.title} />
        <Spacer />
        <View style={{width: '90%'}}>
          <RNPText
            style={ocs.subTitle}
            title={`When was your last \n mensturation date ?`}
          />
        </View>
      </View>
      {/* date selector */}
      <View style={qs.dateWrapper}>
        <View style={qs.datePicker}>
          <MyDatePicker />
          <Spacer space={30} />
          <RNPText
            style={qs.text}
            title={` I dont't know my last menusturation \n menstrual date.`}
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
