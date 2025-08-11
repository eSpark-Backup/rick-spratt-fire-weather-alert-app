import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigationProp } from '../../navigation/navigation';

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
      <Text>Sign In</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Login" onPress={() => navigation.replace('HomeTabs')} />
    </View>
  );
}
