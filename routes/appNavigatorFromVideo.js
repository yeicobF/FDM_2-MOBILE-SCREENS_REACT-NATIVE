// DESDE AQUÍ SE IRÁN CAMBIANDO LAS PANTALLAS.
// https://www.youtube.com/watch?v=cS4PgI3zBzY&t=1s&ab_channel=TheNetNinja

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import ProductOverview from '../screens/productOverview';
import { createAppContainer } from 'react-navigation';

// CONSTANTE CON LAS PANTALLAS.
const screens = {
  // Podemos ponerle cualquier nombre. Lo importante es lo que se referencia en
  // la variable de "screen".
  //
  // - LA PANTALLA QUE ESTÁ HASTA ARRIBA ES LA PRIMERA QUE SE VA A MOSTRAR, ya
  // que es una "STACK", es decir, una PILA.
  //
  Login: {
    screen: Login,
  },
  ProductOverview: {
    screen: ProductOverview,
  },
};

// Función que nos permitirá navegar entre pantallas.
const HomeStack = createStackNavigator(screens);

// Para la configuración de la pila de pantallas.
// Regresa un componente que podemos renderizar en el archivo de entrada
// (App.js).
export default createAppContainer(HomeStack);
