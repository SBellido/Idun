import * as yup from 'yup';

export const useValidationSchema = () => {
  return yup.object().shape({
    email: yup.string().email('Email inválido').required('El Email es requerido'),
    password: yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
      .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
      .required('La contraseña es requerida'),
    repeatEmail: yup.string()
      .nullable()
      .oneOf([yup.ref('email'), null], 'Los emails no coinciden')
      .email('Email inválido')
      .required('Repetir el Email es obligatorio'),
    repeatPassword: yup.string()
      .nullable()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Repetir la contraseña es obligatorio'),
  });
  
}