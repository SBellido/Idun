import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// En un archivo como 'types.ts' o 'types.d.ts'
export interface RootState {
  user: UserState;
  // Otros estados aquí si los tienes
}

export interface UserState {
  user: User | null;
  // Otros campos relacionados con el usuario aquí si los tienes
}

export interface User {
  // Estructura de datos del usuario
}
