import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';

import {theme, color, fonts} from '../../themes/theme';

const signupScreenStyle = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: normalize(16),
  },
  formWrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  heading: {
    fontWeight: '700',
    fontSize: theme.size.xl,
    fontFamily: fonts.NunitoExtraBold,
  },
  subHeading: {
    fontWeight: '400',
    fontFamily: fonts.NunitoRegular,
    fontSize: theme.size.base,
  },
  socialBtns: {
    flexDirection: 'row',
    paddingHorizontal: normalize(10),
    // alignItems: 'center',
  },
});

export {signupScreenStyle};
