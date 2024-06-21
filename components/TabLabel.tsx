import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TabLabelProps {
  title: string;
  color: string;
}

const TabLabel: React.FC<TabLabelProps> = ({ title, color }) => {
  return <Text style={[styles.label, { color }]}>{title}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12, // Puedes ajustar el tamaño de fuente según tus necesidades
    fontWeight: 'bold', // Puedes ajustar el grosor de la fuente según tus necesidades
    color: '#041448', // Puedes ajustar el color de la fuente según tus necesidades
  },
});

export { TabLabel };
