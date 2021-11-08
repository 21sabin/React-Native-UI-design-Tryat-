import React from 'react';
import {View, Text} from 'react-native';
import {commonStyle as cs} from '../../../../assets/styles';

interface props {
  navigation: any;
}

export const Journal = ({navigation}: props) => {
  return (
    <View style={cs.wrapper}>
      <View style={{flexDirection: 'row'}}>
        <Text>Journal component is comming soon</Text>
      </View>
    </View>
  );
};
