import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
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
          tabBarLabel: ({ color }) => <TabLabel title="Iniciar sesión" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="signUp"
        options={{
          tabBarLabel: ({ color }) => <TabLabel title="Crear cuenta" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}

      />
      <Tabs.Screen
        name="learnIdun"
        options={{
          tabBarLabel: ({ color }) => <TabLabel title="Saber más" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bulb' : 'bulb-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Welcome"
        initialParams={{ email: '' }}
      />
    </Tabs >
  );
}
