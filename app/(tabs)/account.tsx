import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { Formik } from 'formik';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { ButtonConfirm } from '@/components/ButtonConfirm';
import { useValidationSchema } from '@/hooks/useValidationSchema';
import { ButtonCancel } from '@/components/ButtonCancel';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const validationSchema = useValidationSchema();

  // const [isFormValid, setIsFormValid] = useState(false);

  const initialValues = {
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
  };

  const handleSignUp = (values: { email: string; repeatEmail: string; password: string; repeatPassword: string }) => {
    // Implementa tu lógica de registro aquí
    console.log('Email:', values.email);
    console.log('Repeat Email:', values.repeatEmail);
    console.log('Password:', values.password);
    console.log('Confirm Password:', values.repeatPassword);
    console.log('Accept Terms:', acceptTerms);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <View style={styles.container}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => {
            const isFormValid = isValid && acceptTerms;

            return (
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
                  placeholder="Repetir email *"
                  onChangeText={handleChange('repeatEmail')}
                  onBlur={handleBlur('repeatEmail')}
                  value={values.repeatEmail}
                  error={errors.repeatEmail}
                  touched={touched.repeatEmail}
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
                <Input
                  placeholder="Repetir contraseña *"
                  onChangeText={handleChange('repeatPassword')}
                  onBlur={handleBlur('repeatPassword')}
                  value={values.repeatPassword}
                  secureTextEntry={secureTextEntry}
                  toggleSecureEntry={toggleSecureEntry}
                  error={errors.repeatPassword}
                  touched={touched.repeatPassword}
                />
                <Checkbox
                  acceptTerms={acceptTerms}
                  toggleAcceptTerms={toggleAcceptTerms}
                />
                <ButtonConfirm
                  onPress={handleSubmit}
                  title="Confirmar"
                  disabled={!isFormValid}
                />
              </View>
            );
          }}
        </Formik>
        <ButtonCancel
          onPress={() => navigation.goBack()}
          title="Volver"
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: 25,
    color: '#041448',
    marginBottom: 30,
  },
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});