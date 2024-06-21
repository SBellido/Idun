import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { Formik } from 'formik';
import { Input } from '@/components/Input';
import { ButtonConfirm } from '@/components/ButtonConfirm';
import { ButtonCancel } from '@/components/ButtonCancel';
import { useValidationSignIn } from '@/hooks/useValidationSignIn';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Title } from '@/components/Title';
import { LogoContainer } from '@/components/LogoContainer';

export default function LoginForm() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const validationSignIn = useValidationSignIn();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = (values: { email: string; password: string }) => {
    // Implementa tu lógica de inicio de sesión aquí
    console.log('Email:', values.email);
    console.log('Password:', values.password);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFF', dark: '#90FD9B' }}
      headerImage={<LogoContainer />}
    >
      <View style={styles.formContainer}>
        <Title title={'Iniciar sesión'} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSignIn}
          onSubmit={handleLogin}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <View>
              <Input
                placeholder="Email *"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                touched={touched.email}
              />
              <Input
                placeholder="Contraseña *"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={secureTextEntry}
                toggleSecureEntry={toggleSecureEntry}
                error={errors.password}
                touched={touched.password}
              />
              <ButtonConfirm
                onPress={handleSubmit}
                title="Iniciar sesión"
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
        <View style={styles.cancelContainer}>
          <Text style={styles.createAccountText}>
            Si aún no estas registrado
          </Text>
          <ButtonCancel
            onPress={() => router.push('./(tabs)/signUp')}
            title="Crear cuenta"
          />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },
  cancelContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  createAccountText: {
    fontSize: 16,
    color: '#041448',
  },
});
