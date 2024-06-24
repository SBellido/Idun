import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import { Formik } from 'formik';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { ButtonConfirm } from '@/components/ButtonConfirm';
import { useValidationSignUp } from '@/hooks/useValidationSignUp';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Title } from '@/components/Title';
import { LogoContainer } from '@/components/LogoContainer';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../service/firebase/firebaseConfig'; // Import Firebase
import { User, createUserWithEmailAndPassword } from 'firebase/auth'; // Importa createUserWithEmailAndPassword

export default function SignUp() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const validationSignUp = useValidationSignUp();

  const initialValues = {
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
  };

  const handleSignUp = async (values: { email: string; repeatEmail: string; password: string; repeatPassword: string }) => {

    console.log('Email:', values.email);
    console.log('Repeat Email:', values.repeatEmail);
    console.log('Password:', values.password);
    console.log('Confirm Password:', values.repeatPassword);
    console.log('Accept Terms:', acceptTerms);
    if (!acceptTerms) {
      Alert.alert('Términos y Condiciones', 'Debe aceptar los términos y condiciones para crear una cuenta.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user: User | null = userCredential.user;

      if (user) {
        // const userRef = ref(db, 'users/' + user.uid);
        const userRef = doc(collection(firestore, 'users'), user.uid);
        console.log('UID:', user.uid);

        const idToken = await user.getIdToken();
        console.log('ID Token:', idToken);

        await setDoc(userRef, {
          email: user.email,
          createdAt: new Date().toISOString(),
        });

        console.log('Datos del usuario guardados en la base de datos.');
        Alert.alert('Cuenta creada', 'La cuenta se ha creado correctamente.');
      }
    } catch (error) {
      console.error('Error al crear cuenta:', error);
      Alert.alert('Error', 'No se pudo crear la cuenta. Por favor, inténtalo de nuevo.');
    }

  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#353636' }}
      headerImage={<LogoContainer />}
    >
      <View style={styles.formContainer}>
        <Title title={'Crear cuenta'} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSignUp}
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
        <View style={styles.cancelContainer}>
          <Text style={styles.messageAccount}>
            Si ya tiene cuenta
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signIn}>
              inicia sesión
            </Text>
          </TouchableOpacity>
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
    shadowColor: '#041448',
    // shadowOffset: {
    //   width: 0,
    //   height: -2,
    // },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },
  cancelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  messageAccount: {
    fontSize: 16,
    color: '#041448',
  },
  signIn: {
    fontSize: 16,
    color: '#00C114',
    marginLeft: 5,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#00C114',
  }
});
