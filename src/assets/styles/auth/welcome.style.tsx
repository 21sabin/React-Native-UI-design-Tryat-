import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../app/utilities/utils';

import {theme, color} from '../../themes/theme';

const welcomeScreenStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: normalize(20),
    backgroundColor: '#6F82DE',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleColor: {
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: normalize(36),
  },
  headerSubTitle: {
    fontSize: normalize(16),
  },
  imageWrapper: {
    flex: 2,
    alignItems: 'center',
  },
  btnWrapper: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: normalize(20),
  },
  btnStyle: {
    backgroundColor: '#fff',
  },
  image: {
    width: normalize(200),
    height: normalize(250),
    marginVertical: normalize(20),
  },
});

export {welcomeScreenStyle};
