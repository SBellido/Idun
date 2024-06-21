import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void; // Corregido para el tipo esperado
  value: string;
  secureTextEntry?: boolean;
  toggleSecureEntry?: () => void;
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
  toggleSecureEntry,
  error,
  touched
}) => {

  const handleBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={handleBlur}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {secureTextEntry !== undefined && (
        <TouchableOpacity style={styles.icon} onPress={toggleSecureEntry}>
          <Icon name={secureTextEntry ? 'eye' : 'eye-slash'} size={20} color="#888" />
        </TouchableOpacity>
      )}
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );

};

const styles = StyleSheet.create({
  inputContainer: {
    width: 330,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#041448',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    color: '#041448',
  },
  error: {
    color: 'red',
  },
});

export { Input };
