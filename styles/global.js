import { StyleSheet } from 'react-native';

// ESTILOS GLOBALES QUE SE ENCONTRARÁN PARA TODOS LOS ELEMENTOS GENERALES.
// Hay que exportar los estilos para que puedan ser utilizados.
//
// https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/prefer-default-export.md
//
// "When there is only a single export from a module, prefer using default
// export over named export".

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default globalStyles;
