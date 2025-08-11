import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigationProp } from '../../navigation/navigation';

type Props = { navigation: RootStackNavigationProp<'SignUp'> };

export default function SignUpScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}
