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
  const onboarding_screens = [
    <Welcome />,
    <QuestionScreen1 handleNext={hadleSkip} {...props} />,
    <QuestionScreen2 handleNext={hadleSkip}{...props} />,
    <Location handleNext={hadleSkip} {...props} />,
    <Ready {...props} />,
  ];

  const goBack = () => {
    if (activeScreen > 0) {
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
