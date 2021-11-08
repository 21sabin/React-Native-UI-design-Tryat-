import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  commonStyle as cs,
  signupScreenStyle as ss,
} from '../../../assets/styles';
import {app_color, fonts} from '../../../assets/themes/theme';
import {
  ButtonRNP,
  SocialButton,
  RNPText,
  BoxInput,
  Spacer,
  IconM,
} from '../../common';
import {normalize} from '../../utilities/utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
interface props {
  navigation: any;
}

export const SignUp = ({navigation}: props) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
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
              <RNPText title="Sign Up" style={ss.heading} />
              <RNPText title="Lets setup your account" style={ss.subHeading} />
            </View>
          </View>
          <View style={{flex: 5}}>
            <View style={ss.formWrapper}>
              <BoxInput
                placeholder="Email"
                onChangeText={() => {}}
                leftIcon="email-outline"
              />
              <BoxInput
                placeholder="Username"
                onChangeText={() => {}}
                leftIcon="account-outline"
              />
              <BoxInput
                placeholder="Enter a Password"
                onChangeText={() => {}}
                secureEntry={true}
                leftIcon="lock-outline"
              />
              <Spacer />
              <ButtonRNP title="Create Account" onPress={() => {}} />
            </View>
          </View>

          <View style={{flex: 2, alignItems: 'center'}}>
            <View style={{flex: 3, justifyContent: 'center'}}>
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
                  style={{width: normalize(240)}}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
