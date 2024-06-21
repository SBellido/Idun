// HomeScreen.tsx

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderIdun } from '@/components/HeaderIdun';
import { ButtonConfirm } from '@/components/ButtonConfirm';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../components/navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleCreateAccountPress = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonConfirm title="Crear cuenta" onPress={handleCreateAccountPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    width: 330,
  },
});

export { HomeScreen };

