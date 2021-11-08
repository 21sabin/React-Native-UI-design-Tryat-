import React from 'react';
import {BoxInput, ButtonRNP, IconM, SocialButton, Spacer} from '../../common/';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  commonStyle as cs,
  signupScreenStyle as ss,
} from '../../../assets/styles';
import {RNPText} from '../../common';
import {app_color, fonts} from '../../../assets/themes/theme';
import {normalize} from '../../utilities/utils';
import {ScrollView} from 'react-native-gesture-handler';

interface props {
  navigation: any;
}

export const SignIn = ({navigation}: props) => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignSelf: 'flex-start', marginTop: normalize(20)}}>
            <IconM name={'arrow-left'} color={'black'} />
          </TouchableOpacity>
          {/* Heading section*/}
          <View style={ss.headingWrapper}>
            <RNPText title="Login" style={ss.heading} />
            <RNPText title="Welcome Back!" style={ss.subHeading} />
          </View>
        </View>
        <View style={{flex: 3}}>
          <View style={[ss.formWrapper]}>
            <BoxInput
              placeholder="Email"
              onChangeText={() => {}}
              leftIcon="email-outline"
            />
            <BoxInput
              placeholder="Enter a Password"
              onChangeText={() => {}}
              secureEntry={true}
              leftIcon="lock-outline"
            />
            <Spacer />
            <ButtonRNP
              title="Login"
              onPress={() => {
                navigation.navigate('onboarding_screen');
              }}
            />
            <Spacer />
            <TouchableOpacity onPress={() => {}}>
              {/* <Text style={{fontWeight: 'bold'}}> SignUp</Text> */}
              <RNPText
                style={{fontWeight: 'bold', color: app_color.primaryButton}}
                title="Forgot Password?"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <RNPText
                style={{fontWeight: 'bold', fontFamily: fonts.NunitoBold}}
                title="or"
              />
            </View>
            <View style={ss.socialBtns}>
              <SocialButton
                title="Sign Up with Google"
                onPress={() => {}}
                btnImage={require('../../../assets/images/google.png')}
              />
              <Spacer width={true} />
              <SocialButton
                title="Sign Up with Facebook"
                onPress={() => {}}
                btnImage={require('../../../assets/images/facebook.png')}
                style={{width: normalize(240), backgroundColor: 'red'}}
              />
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={() => {
                navigation.navigate('signup');
              }}>
              <RNPText
                style={{
                  fontWeight: 'bold',
                  color: app_color.primaryButton,
                  fontFamily: fonts.NunitoBold,
                }}
                title="Don't have a Account ? SignUp"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
