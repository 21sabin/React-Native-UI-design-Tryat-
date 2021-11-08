import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import normalize from 'react-native-normalize';
import { Spacer, CustomButton } from '../../../../common'
import { app_color, color } from '../../../../../assets/themes/theme';

export const TopPicksItem = ({ id, price, title, thumbnail }: any) => {
    return (
        <View style={styles.topPickItem}>
            {/* image */}
            <View>
                <Image
                    style={styles.image}
                    source={thumbnail}
                />
            </View>
            <View style={styles.txtWrapper}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={{ width: 100 }}>
                    {title}
                </Text>
                <Spacer space={10} />
                <Text style={styles.textStyle}>Rs {price}</Text>
                <Spacer space={10} />
            </View>
            <View>
                <CustomButton
                    title="Add to cart"
                    onPress={() => { }}
                    style={styles.btnStyle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topPickItem: {
        margin: normalize(10)
    },
    image: {
        width: normalize(100),
        height: normalize(100)
    },
    txtWrapper: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btnStyle: {
        width: 100,
        paddingVertical: normalize(10),
        opacity: 0.1
    },
    textStyle: {
        fontWeight: 'bold'
    }
})
