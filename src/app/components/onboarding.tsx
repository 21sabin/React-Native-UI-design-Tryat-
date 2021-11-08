import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { onboardingStyle as os } from '../../assets/styles';
import {
  Welcome,
  Ready,
  Location,
  QuestionScreen1,
  QuestionScreen2,
} from './../screens/main';
import { OnboardingHeader } from '../components/';


const Onboarding = (props: any) => {
  const [activeScreen, setActiveScreen] = useState(0);

  const hadleSkip = () => {
    if (activeScreen < onboarding_screens.length - 1) {
      props.navigation.navigate('main')
    }
  };

  const handleNext = () => {
    if (activeScreen < onboarding_screens.length - 1) {
      setActiveScreen((prev) => prev + 1);
    } else {
      props.navigation.navigate('main')
    }
  }
  const onboarding_screens = [
    <Welcome handleNext={handleNext} {...props} />,
    <QuestionScreen1 handleNext={handleNext} {...props} />,
    <QuestionScreen2 handleNext={handleNext}{...props} />,
    <Location handleNext={handleNext} {...props} />,
    <Ready {...props} />,
  ];

  const goBack = () => {
    if (activeScreen >= 0) {
      setActiveScreen(() => activeScreen - 1);
    } else {
      console.log('go to login page');
    }
  };

  return (
    <View style={os.container}>
      <OnboardingHeader
        hadleSkip={hadleSkip}
        goBack={goBack}
        activeIndex={activeScreen}
      />
      {onboarding_screens[activeScreen]}
    </View>
  );
};

export { Onboarding };
