import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonCancelProps {
  onPress: () => void;
  title: string;
}

const ButtonCancel: React.FC<ButtonCancelProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonBack} onPress={onPress}>
      <Text style={styles.buttonTextBack}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    backgroundColor: '#FFF',
    width: 330,
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    height: 50,
    borderColor: '#90FD9B',
    borderWidth: 2,
  },
  buttonTextBack: {
    color: '#041448',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { ButtonCancel };
