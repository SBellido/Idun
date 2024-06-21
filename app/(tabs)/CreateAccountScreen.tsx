import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import { Formik } from 'formik';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { ButtonConfirm } from '@/components/ButtonConfirm';
import { useValidationSignUp } from '@/hooks/useValidationSignUp';
import { ButtonCancel } from '@/components/ButtonCancel';
import { HeaderIdun } from '@/components/HeaderIdun';


function CreateAccountScreen() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const validationSignUp = useValidationSignUp();

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
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={useValidationSignUp}
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
  );
}

const styles = StyleSheet.create({
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

export { CreateAccountScreen };
