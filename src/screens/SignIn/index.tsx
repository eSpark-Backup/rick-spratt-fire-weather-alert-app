import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigationProp } from '../../navigation/navigation';
import CustomText from '../../components/CustomText';
import { BackIcon } from '../../assets';

type Props = { navigation: RootStackNavigationProp<'SignIn'> };

export default function SignInScreen({ navigation }: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomText>Sign IN</CustomText>
      <BackIcon />
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Login" onPress={() => navigation.replace('HomeTabs')} />
    </View>
  );
}
