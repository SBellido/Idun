import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonConfirmProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

const ButtonConfirm: React.FC<ButtonConfirmProps> = ({
  onPress,
  title,
  disabled
}) => (
  <TouchableOpacity
    style={[styles.button, disabled && { backgroundColor: '#F6F6F6' }]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.buttonText, disabled && { color: '#D2D2D2' }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#90FD9B',
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    color: '#041448',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { ButtonConfirm };
