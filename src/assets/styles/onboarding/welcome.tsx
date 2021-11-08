import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';

const onboardingWelcomeStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleWrapper: {
    alignItems: 'center',
    flex: 1,
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
  body: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'flex-start',
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#4E4E52',
    fontSize: normalize(16),
    fontWeight: '700',
  },
});

export {onboardingWelcomeStyle};
