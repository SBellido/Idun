import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CreateAccountScreen } from '@/app/(tabs)/CreateAccountScreen';
import { TabLabel } from '@/components/TabLabel';

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
          tabBarLabel: ({ color }) => <TabLabel title="INICIAR SESIÓN" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: ({ color }) => <TabLabel title="CREAR CUENTA" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="learIdun"
        options={{
          tabBarLabel: ({ color }) => <TabLabel title="SABER MÁS" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bulb' : 'bulb-outline'} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
