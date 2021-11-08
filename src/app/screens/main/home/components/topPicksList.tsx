import React from 'react';
import { TopPicksItem } from './topPicksItem';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { top_picks_for_you } from '../../../../../assets/constants/dummyData';
import normalize from 'react-native-normalize';

export const TopPicks = () => {
    return (
        <View style={styles.wrapper}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    top_picks_for_you.map((item: any) => {
                        return <TopPicksItem {...item} />
                    })
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingHorizontal: normalize(10)
    }
})