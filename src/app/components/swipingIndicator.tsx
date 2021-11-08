import React from 'react';
import {View, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {app_color} from '../../assets/themes/theme';

enum IndicatorShape {
  'REACTANVE',
  'CIRCLE',
}

interface SwipingIndicatorProps {
  activeColor?: string;
  inactiveColor?: string;
  shape?: IndicatorShape;
  count?: number | undefined;
  activeIndex?: number;
}

const INDICATOR_HEIGHT = 4;
const ACTIVE_INDICATOR_WIDTH = 17;
const INACTIVE_INDICATOR_WIDTH = 10;

const SwipingIndicator = (props: SwipingIndicatorProps) => {
  const number = new Array(props.count).fill(null);
  return (
    <View style={styles.defaultStyle}>
      {number.map((x, index) => {
        // const i = index + 1;
        return (
          <View
            key={index}
            style={[
              {
                backgroundColor:
                  index == props.activeIndex
                    ? props.activeColor
                    : props.inactiveColor,
                borderRadius: normalize(10),
              },
              index == props.activeIndex
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}></View>
        );
      })}
    </View>
  );
};

export {SwipingIndicator};

SwipingIndicator.defaultProps = {
  activeColor: app_color.primaryButton,
  inactiveColor: '#dbdbdb',
  shape: 'RECTANGLE',
  count: 5,
  activeIndex: 1,
};

const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: normalize(40),
  },
  activeIndicator: {
    height: INDICATOR_HEIGHT,
    margin: 4,
    width: ACTIVE_INDICATOR_WIDTH,
  },
  inactiveIndicator: {
    height: INDICATOR_HEIGHT,
    margin: 4,
    width: INACTIVE_INDICATOR_WIDTH,
  },
});
