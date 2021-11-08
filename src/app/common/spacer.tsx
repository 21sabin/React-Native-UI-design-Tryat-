import React from 'react';
import {View} from 'react-native';
import {normalize} from '../utilities/utils';

interface SpacerProps {
  width?: boolean;
  height?: boolean;
  space?: number | undefined;
}

const Spacer = ({width, height, space}: SpacerProps) => {
  return (
    <View
      style={[
        width ? {marginHorizontal: normalize(space ?? 0)} : {},
        height ? {marginBottom: normalize(space ?? 0)} : {},
      ]}></View>
  );
};

Spacer.defaultProps = {
  height: true,
  space: 10,
};

export {Spacer};
