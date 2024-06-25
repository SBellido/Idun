import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Welcome } from '@/app/(tabs)/welcome'; // Ajusta la ruta según sea necesario
import { SignUp } from '@/app/(tabs)/signUp'; // Ajusta la ruta según sea necesario
import LearnIdunScreen from '@/screens/LearnIdun'; // Ajusta la ruta según sea necesario
import LoginScreen from '@/screens/Login'; // Ajusta la ruta según sea necesario

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LearnIdun" component={LearnIdunScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
