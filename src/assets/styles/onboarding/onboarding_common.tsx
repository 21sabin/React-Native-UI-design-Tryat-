import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';

const onboardingCommonStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    color: '#43485A',
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  subTitle: {
    color: '#5D5E63',
    fontSize: normalize(16),
    textAlign: 'center',
    lineHeight: normalize(28),
  },
  bottomPadding: {
    paddingVertical: normalize(40),
  },
});

export {onboardingCommonStyle};
