import { StyleSheet, Dimensions } from 'react-native';
import { normalize } from '../../app/utilities/utils';

const commonStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    margin: normalize(10)
  },
  drawerStyle: {
    flex: 1,
    width: Dimensions.get('window').width * 0.8,
  },
});

export { commonStyle };
