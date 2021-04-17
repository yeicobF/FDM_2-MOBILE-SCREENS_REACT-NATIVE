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
import React from 'react'; // <- ESTO SÍ DEJA CORRER LA APP.
import {
  View, Text, Image, TextInput, SafeAreaView,
} from 'react-native';

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
        <Text style={loginStyles.yourCompanyText}>
          Your Company
        </Text>
        <View style={loginStyles.inputTextWrapper}>
          <Text style={loginStyles.inputTextAboveText}>
            Usuario
          </Text>
          <TextInput
            style={loginStyles.inputTextSquare}
            placeholder=""
          />
          <Text style={loginStyles.inputTextAboveText}>
            Contraseña
          </Text>
          <TextInput
            style={loginStyles.inputTextSquare}
            placeholder=""
          />

        </View>
      </View>
    </View>
  );
}
