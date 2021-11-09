import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import normalize from 'react-native-normalize';
import { Spacer, CustomButton } from '../../../../common'
import { app_color, color } from '../../../../../assets/themes/theme';

export const TopPicksItem = ({ id, price, title, thumbnail, ...props }: any) => {
    return (
        <View style={styles.topPickItem} {...props}>
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
                    style={styles.btnStyle}
                    title="Add to cart"
                    labelColor={{ color: app_color.primaryButton, fontWeight: 'bold' }}
                    onPress={() => { }}
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
        backgroundColor: '#e1e4e8'
    },
    textStyle: {
        fontWeight: 'bold'
    }
})
