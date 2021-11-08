import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';
import {app_color} from '../../themes/theme';
const PADDING_CONSTANT = normalize(20);

const questionScreenStyle = StyleSheet.create({
  container: {},
  heading: {
    alignItems: 'center',
  },
  dateWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: PADDING_CONSTANT,
  },
  datePicker: {
    marginTop: normalize(50),
  },
  text: {
    textAlign: 'center',
    lineHeight: normalize(30),
    color: app_color.primaryButton,
    fontWeight: '600',
  },
});

export {questionScreenStyle};
