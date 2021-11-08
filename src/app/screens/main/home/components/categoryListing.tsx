import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import normalize from 'react-native-normalize';
import { CategoryItem } from './categoryItem';
import { categories } from '../../../../../assets/constants/dummyData';
import { ButtonRNP } from '../../../../common'
import { app_color, color } from '../../../../../assets/themes/theme';

export const CategoryListing = () => {
    console.log('categories', categories)
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHeader}>Shop by Category</Text>
            <View style={styles.categoryListing}>
                {
                    categories.map((item: any) => {
                        return <CategoryItem {...item} />
                    })
                }
            </View>
            <View style={styles.btnStyle}>
                <ButtonRNP
                    style={{ backgroundColor: '#e1e4e8' }}
                    title="Go to Store"
                    labelColor={app_color.primaryButton}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: normalize(10),

    },
    categoryListing: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: normalize(10),
        justifyContent: 'flex-start'
    },
    textHeader: {
        fontWeight: 'bold',
        marginHorizontal: normalize(10)
    },
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: normalize(12)
    }
})
