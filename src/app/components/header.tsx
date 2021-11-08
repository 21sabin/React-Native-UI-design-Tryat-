import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { IconM, Spacer } from '../common'

export const Header = ({ navigation }: any) => {
    console.log(navigation)
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.leftSection} onPress={() => navigation.openDrawer()}>
                <IconM name="menu" color="#5D5E63" />
            </TouchableOpacity>
            <View style={styles.rightSection}>
                <IconM name="bell-outline" color="#5D5E63" />
                <Spacer width={true} space={10} />
                <IconM name="cart-outline" color="#5D5E63" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        paddingVertical: normalize(20),
        flexDirection: 'row',
        paddingHorizontal: normalize(14),
        backgroundColor: 'white'
    },
    leftSection: {
        flex: 2,
    },
    rightSection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    }
})
