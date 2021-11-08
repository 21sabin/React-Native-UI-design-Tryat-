import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { app_color, color } from '../../../../../assets/themes/theme';
import { Spacer } from '../../../../common';
import Slider from '@react-native-community/slider';

export const HeaderSection = () => {

    const renderSlider = () => {
        return <Slider
            style={{ width: 230, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFA4D8"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#FFA4D8"
        />
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.txtWrapper}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Text style={[styles.txtStyle, { color: 'yellow', fontWeight: 'bold' }]}>Your baby</Text>
                        <Text style={[styles.txtStyle, styles.titleStyle]}> is as big as  a pumpkin</Text>
                    </View>
                    {/* Slider */}
                    <View >
                        <Spacer space={5} />
                        {renderSlider()}
                    </View>
                </View>
                {/* pumpking image */}
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={require('../../../../../assets/images/home_images/pumpkin.png')}
                    />
                </View>
            </View>

            <View style={styles.headerBottom}>
                <Text style={{ color: '#e1e4e8' }}>8 weeks to go!</Text>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={{ fontSize: normalize(12), fontWeight: 'bold', color: '#e1e4e8' }}>Read more about this week</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6F82DE',
        width: '100%',
        height: normalize(180),
        borderRadius: normalize(10),
        marginVertical: normalize(10),
        paddingVertical: normalize(10)
    },
    wrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: normalize(14)
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    txtWrapper: {
        flex: 2,
    },
    image: {

    },
    txtStyle: {
        fontWeight: '900',
        fontSize: normalize(18),

    },
    titleStyle: {
        color: '#e1e4e8'
    },
    btnStyle: {
        width: normalize(170),
        padding: 0,
        borderRadius: normalize(16),
        alignItems: 'center',
        paddingVertical: normalize(8),
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        opacity: 7

    },
    headerBottom: {
        paddingHorizontal: normalize(14)
    },

})
