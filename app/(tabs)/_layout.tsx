import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CreateAccountScreen } from '@/app/(tabs)/CreateAccountScreen';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Iniciar sesión',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="learIdun"

        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('@/assets/images/isologo.png')}
              style={{ width: 100, height: 100, marginBottom: 50 }} // Ajusta el tamaño y el color según tus necesidades
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Crear cuenta',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
