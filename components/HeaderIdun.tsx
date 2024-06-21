// Header.tsx

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView'; // Ajusta la ruta según tu estructura

const HeaderIdun: React.FC = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFF', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/idunLogo_.png')}
          style={styles.idunLogo}
          resizeMode="contain"
        />
      }>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  idunLogo: {
    marginTop: 70,
    height: 170,
    alignSelf: 'center',
  },
});

export { HeaderIdun };
