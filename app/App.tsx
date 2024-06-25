import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import AppNavigator from './AppNavigator'; // Ajusta la ruta según sea necesario

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
