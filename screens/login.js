// PANTALLA DE INICIO DE SESIÓN.

// import { React } from 'react'; // <- ESTO NO DEJA CORRER LA APP.

// https://stackoverflow.com/questions/39423054/react-jsx-file-giving-error-cannot-read-property-createelement-of-undefined
//
// To import React do import React from 'react' You add brackets when the thing
// you are importing is not the default export in that module or file. In case
// of react, it's the default export.
//
// Brackets are for named exports such as this:
//
// import React, { useState, useEffect } from 'react';
//

// -> REACT NAVIGATIOR
//
// https:/ / reactnavigation.org / docs / 6.x / getting - started
//
// To finalize installation of react-native-gesture-handler, add the following
// at the top (make sure it's at the top and there's nothing else before it) of
// your entry file, such as index.js or App.js:
import 'react-native-gesture-handler';
import React from 'react'; // <- ESTO SÍ DEJA CORRER LA APP.
import { View, Text, Image } from 'react-native';
// import { AppLoading } from 'expo';
// import { StatusBar } from 'expo-status-bar';

// expo install @expo-google-fonts/raleway
// https://www.youtube.com/watch?v=LBmsecuEXNQ&ab_channel=DesignIntoCode
// import {
//   useFonts,
//   Raleway_100Thin,
//   Raleway_300Light,
//   Raleway_400Regular,
//   Raleway_500Medium,
//   Raleway_900Black,
// 
// } from '@expo-google-fonts/raleway';

// Así importamos los estilos que creamos aparte.
import globalStyles from '../styles/global';
import loginStyles from '../styles/loginStyles';

// EL LOGO DEL LOGIN, para evitar el require() dentro del source.
const loginLogo = require('../assets/img/login/logo.png');

// Función principal.
export default function Login() {
  return (
    <View style={loginStyles.contentWrapper}>
      <View style={loginStyles.logoContentWrapper}>
        <Image
          style={loginStyles.logo}
          // ME SALÍA UN ERROR DEL LINTER: Unexpected require();, por eso lo
          // tuve que poner en una variable.
          // https://stackoverflow.com/questions/37487007/eslint-es6-redux-global-required-unexpected-require
          source={loginLogo}

          // source={{
          //   uri: '../img/login/logo.png',
          // }}

        />
        {/* <Text style={{ fontFamily: Raleway_500Medium, fontSize: 50 }}> */}
        {/* <Text style={{ fontFamily: Raleway_900Black, fontSize: 30 }}>
          Your Company
        </Text> */}
      </View>
    </View>
  );
}
