import { Title } from '@/components/Title';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface WelcomeProps {
  route: {
    params: {
      email: string;
    };
  };
}

function Welcome({ route }: WelcomeProps) {
  const { email } = route.params;

  return (
    <View>
      <Text>Bienvenido, {email}</Text>
      {/* <Title title={'Bienvenido'}>, {email}</Title> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    width: 300,
  },
});

export { Welcome };
