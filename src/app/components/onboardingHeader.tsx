import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SwipingIndicator} from './swipingIndicator';
import {IconM, RNPText} from '../common';
import {normalize} from '../utilities/utils';

interface OnboardingHeaderProps {
  hadleSkip: () => void;
  activeIndex: number;
  goBack: () => void;
}

const OnboardingHeader = ({
  hadleSkip,
  activeIndex,
  goBack,
}: OnboardingHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={goBack}>
        <IconM name="arrow-left" color="#5D5E63" />
      </TouchableOpacity>
      <SwipingIndicator activeIndex={activeIndex} />
      <TouchableOpacity onPress={hadleSkip}>
        <RNPText title="skip" />
      </TouchableOpacity>
    </View>
  );
};

export {OnboardingHeader};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
    alignItems: 'center',
    paddingVertical: normalize(40),
    backgroundColor: '#ffffff',
  },
});
