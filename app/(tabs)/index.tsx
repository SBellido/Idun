import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { Formik } from 'formik';
import { Input } from '@/components/Input';
import { ButtonConfirm } from '@/components/ButtonConfirm';
import { ButtonCancel } from '@/components/ButtonCancel';
import { useValidationSchema } from '@/hooks/useValidationSchema';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginForm() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const validationSchema = useValidationSchema();

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
      headerImage={
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/idunLogo_.png')}
            style={styles.idunLogo}
          />
        </View>
      }>
      <View style={styles.formContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.title} type="title">Iniciar sesión</ThemedText>
        </ThemedView>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
        <ButtonCancel
          onPress={() => router.push('./(tabs)/account')}
          title="Crear cuenta"
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  idunLogo: {
    width: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
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
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});
