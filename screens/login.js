// PANTALLA DE INICIO DE SESIÓN.
import { React } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Así importamos los estilos que creamos aparte.
import { globalStyles } from '../styles/global';

// Función principal.
export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style={globalStyles.container} />
    </View>
  );
}
