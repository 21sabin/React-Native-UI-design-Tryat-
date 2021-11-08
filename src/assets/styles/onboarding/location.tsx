import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';

const PADDING_CONSTANT = normalize(20);

const locationScreenStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: PADDING_CONSTANT,
  },
  titleWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    alignItems: 'center',
  },
});

export {locationScreenStyle};
