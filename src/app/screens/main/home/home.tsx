import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyle as cs } from '../../../../assets/styles';
import { Header } from '../../../components/header';
import { CategoryListing, TopPicks, HeaderSection } from './components';
import { ButtonRNP } from '../../../common'
import { ScrollView } from 'react-native-gesture-handler';

interface props {
  navigation: any;
}

export const Home = ({ navigation }: props) => {


  return (
    <ScrollView style={cs.wrapper}>
      <Header navigation={navigation} />
      <HeaderSection />
      <View style={{ flexDirection: 'row' }}>
        <Text>Home component is comming soon</Text>
      </View>

      {/* shop by category */}
      <CategoryListing />
      <TopPicks />
    </ScrollView >
  );
};
