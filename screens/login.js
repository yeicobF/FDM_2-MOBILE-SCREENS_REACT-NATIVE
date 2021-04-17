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
  View, Text, Image, TextInput,
} from 'react-native';

// import { Icon } from 'react-native-elements';

// Así importamos los estilos que creamos aparte.
import globalStyles from '../styles/global';
import loginStyles from '../styles/loginStyles';

// EL LOGO DEL LOGIN, para evitar el require() dentro del source.
const loginLogo = require('../assets/img/login/logo.png');
const eraseButton = require('../assets/img/login/eraseButton.png');

// Método para no tener que repetir esto con cada ícono de borrado.
// const getEraseIcon = () => (
//   <Image
//     style={loginStyles.eraseIcon}
//     source={eraseButton}
//   />
// );

// Métdo para obtener los cuadros de entrada de texto.
// const getTextInputSquare = (aboveText) => (
//
// );

// Función principal.
export default function Login() {
  return (
    <View style={loginStyles.contentWrapper}>

{/* ----------------------------- LOGO Y TEXTO ----------------------------- */}

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
      </View>

{/* -------------------------- ENTRADA DE TEXTO ---------------------------- */}

      <View style={loginStyles.inputTextWrapper}>
        <View>
          <Text style={loginStyles.inputTextAboveText}>
            Usuario
          </Text>
          <View style={loginStyles.inputTextSquare}>
            <TextInput
              style={loginStyles.inputText}
              placeholder=""
            />
            <Image
              style={loginStyles.eraseIcon}
              source={eraseButton}
            />
          </View>
        </View>
        <View>
          <Text style={[loginStyles.inputTextAboveText, { paddingLeft: 0 }]}>
            Contraseña
          </Text>
          <View style={loginStyles.inputTextSquare}>
            <TextInput
              style={loginStyles.inputText}
              placeholder=""
            />

            {/* EL ÍCONO QUE DEBE IR DENTRO DEL TEXTINPUT */}
            <Image
              style={loginStyles.eraseIcon}
              source={eraseButton}
            />
          </View>
        </View>
      </View>

      <View styles={loginStyles.buttonsWrapper}>

      </View>

    </View>
  );
}
