import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LogoContainer = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('@/assets/images/idunLogo_.png')}
        style={styles.idunLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  idunLogo: {
    height: 200,
    resizeMode: 'contain',
  },
});

export { LogoContainer };