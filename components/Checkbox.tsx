import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CheckboxPorps {
  acceptTerms: boolean;
  toggleAcceptTerms: () => void;
}

const Checkbox: React.FC<CheckboxPorps> = ({
  acceptTerms,
  toggleAcceptTerms
}) => (
  <View style={styles.checkboxContainer}>
    <TouchableOpacity style={styles.checkbox} onPress={toggleAcceptTerms}>
      {acceptTerms ? (
        <Icon name="check-square-o" size={20} color="#888" />
      ) : (
        <Icon name="square-o" size={20} color="#888" />
      )}
    </TouchableOpacity>
    <Text style={styles.checkboxText}>Acepto términos y condiciones</Text>
  </View>
);

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
    width: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: '#041448',
  },
});

export { Checkbox };
