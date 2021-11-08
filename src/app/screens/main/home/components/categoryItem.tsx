import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import normalize from 'react-native-normalize';

export const CategoryItem = ({ id, title, thumbnail }: any) => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={thumbnail}
            />
            <Text style={{ textAlign: 'center' }}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        margin: normalize(10),
        width: normalize(70),
        height: normalize(68),
        flexDirection: 'column',
        alignItems: 'center'
    }
})