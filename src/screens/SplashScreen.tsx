import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

// Importa as imagens da pasta assets
import logoImage from '../assets/images/logo.jpg';
import patinhasImage from '../assets/images/patinhas.jpg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      {/* Primeira imagem: logo.jpg */}
      <Image
        source={logoImage}
        style={styles.logo}
        resizeMode="contain" // Ajusta a imagem para caber na proporção
      />
      
      {/* Segunda imagem: patinhas.jpg */}
      <Image
        source={patinhasImage}
        style={styles.patinhas}
        resizeMode="contain" // Ajusta a imagem para caber na proporção
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EE', // Defina a cor de fundo desejada
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // Usando as proporções de View que você forneceu
    width: 269,
    height: 372,
    marginTop: 162,
    marginBottom: 135,
    marginHorizontal: 62,
  },
  patinhas: {
    // Usando as proporções de View que você forneceu
    width: 359,
    height: 79,
    marginTop: 135,
    marginBottom: 104,
    marginLeft: 18,
    marginRight: 16,
  },
});

export default SplashScreen;