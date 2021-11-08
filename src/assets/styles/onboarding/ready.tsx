import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';
const PADDING_CONSTANT = normalize(20);

const readyScreenStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: PADDING_CONSTANT,
  },
  card: {
    width: normalize(250),
    height: normalize(250),
    borderRadius: normalize(94),
  },
});

export {readyScreenStyle};
