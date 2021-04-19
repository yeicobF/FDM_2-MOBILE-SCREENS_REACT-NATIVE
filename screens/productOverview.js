// PANTALLA EN DONDE SE VEN LAS ESPECIFICACIONES DEL PRODUCTO.
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PropTypes from 'prop-types';

// Así importamos los estilos que creamos aparte.
import globalStyles from '../styles/global';

const ProductOverview = ({ navigation }) => (
  <View style={globalStyles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style={globalStyles.container} />
  </View>
);

// Para poder utilizar el "navigation" para cambiar de pantallas.
ProductOverview.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductOverview;
