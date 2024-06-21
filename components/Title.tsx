import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText style={styles.title} type="title">{title}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    tintColor: '#FFF',
    fontSize: 30,
    fontWeight: 'light',
    color: '#041448',
  },
});
