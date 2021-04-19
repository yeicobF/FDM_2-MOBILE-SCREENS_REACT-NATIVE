// -> REACT NAVIGATIOR
//
// https:/ / reactnavigation.org / docs / 6.x / getting - started
//
// To finalize installation of react-native-gesture-handler, add the following
// at the top (make sure it's at the top and there's nothing else before it) of
// your entry file, such as index.js or App.js:
import 'react-native-gesture-handler';
// useState es para ver si las fuentes ya cargaron.
import React, { useState } from 'react';
// Para navegar entre pantallas.
// import { NavigationContainer } from '@react-navigation/native';

// Importar lo que utilizaremos para las fuentes.
import * as Font from 'expo-font';

// Para cargar las fuentes si es que aún no se cargan.
// ME SALIÓ UN ERROR:
//
//    Attempted import error: 'AppLoading' is not exported from 'expo'.
//
// import { AppLoading } from 'expo';

// Esto lo vi de un comentario del Miércoles, 14 ABRIL 2021
//
// DEL VIDEO: https://www.youtube.com/watch?v=IY5OBeL9LNE&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=17&t=9s&ab_channel=TheNetNinja
//
// UPDATE: use "import AppLoading from 'expo-app-loading';" at the top after
// installation (expo install expo-app-loading). Also, besides onFinish, also
// use
//    onError = { console.warn }
import AppLoading from 'expo-app-loading'; // expo install expo-app-loading

// IMPORTAMOS EL NAVEGADOR DE PANTALLAS.
// Le podemos poner el nombre que queramos porque fue un
// "default expo".
// import ScreenNavigator from './routes/appNavigatorFromVideo';
import AppNavigator from './routes/appNavigator';

// PANTALLAS DE LAS CARPETAS DEL PROYECTO.
// import Login from './screens/login';
// import ProductOverview from './screens/productOverview';

// Obtener las fuentes desde la carpeta en donde las descargué.
// -> ESTO DEBE DE ESTAR EN EL ARCHIVO DE ENTRADA, EN EL PRINCIPAL.
const getFonts = () => Font.loadAsync({
  'raleway-italic-variable': require('./assets/fonts/Raleway-Italic-VariableFont_wght.ttf'),
  'raleway-variable': require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
  'raleway-bold': require('./assets/fonts/static/Raleway-Bold.ttf'),
  'raleway-black': require('./assets/fonts/static/Raleway-Black.ttf'),
  'raleway-medium': require('./assets/fonts/static/Raleway-Medium.ttf'),
  'raleway-light': require('./assets/fonts/static/Raleway-Light.ttf'),
});

export default function App() {
  // PARA VER SI YA SE CARGARON LAS FUENTES.
  // Indicar que aún no se han cargado las fuentes.
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Si las fuentes aún no se han cargado.
  if (!fontsLoaded)
    return (// Si aún no cargan las fuentes hay que cargarlas.
      <AppLoading
        // Obtenemos las fuentes.
        startAsync={getFonts}
        // Cambiamos el estado que indica que ya se cargaron las fuentes.
        // Utilizamos una función anónima.
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );

  // Si ya cargaron las fuentes se puede continuar.
  // Es decir, que la App va a comenzar.
  return (
    <AppNavigator />
    // LO DE ABAJO ERA LO QUE HABÍA VISTO EN LA DOCUMENTACIÓN, PERO AL FINAL LO
    // HICE DIFERENTE.
    // Now, we need to wrap the whole app in NavigationContainer. Usually
    // you'do this in your entry file, such as index.js or App.js
    // https://reactnavigation.org/docs/6.x/getting-started/
    // <NavigationContainer>
    //   {
    //     // Regresamos la pantalla del Login.
    //     <Login />
    // }
    // </NavigationContainer>
  );
}
