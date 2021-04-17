// ESTILOS QUE SERÁN UTILIZADOS EN EL LOGIN SOLAMENTE.

import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  // Wrapper de TODO el contenido, ya que está como centrado con unos paddings
  // a los alrededores y todo está ahí dentro.
  contentWrapper: {
    // Que ocupe TODO EL ESPACIO DE LA PANTALLA.
    flex: 1,
    margin: 50,
    marginTop: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: "30 30 30 30",
    // color: "white",
  },
  // Wrapper del contenedor del logo y su texto inferior.
  logoContentWrapper: {
    // Serán 3 contenedores en total, por lo que este medirá 1/3 del padre.
    flex: 1,
    color: '#F279F2',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  // Tengo que hacerlo por separado porque los estilos no se heredan a los
  // elementos anidados como en CSS, por lo que poner las propiedades del padre
  // en cuanto al texto,  aplicarían en los hijos, como el "Your Company" en
  // este caso.
  yourCompanyText: {
    paddingTop: 10,
    backgroundColor: '#79F2E0',
    fontFamily: 'raleway-variable',
    fontSize: 30,
    fontWeight: "900",
    color: "black",
  },
  // CONTENEDOR DE LAS ENTRADAS DE TEXTO: Usuario, Contraseña.
  inputTextWrapper: {
    flex: 1,
  },
  // Texto superior a los cuadros con la contraseña.
  inputTextTopText: {
    backgroundColor: '#79F2E0',
    fontFamily: 'raleway-variable',
    fontSize: 30,
    fontWeight: "900",
    color: "black",
  },
  // CUADROS DE ENTRADA DE TEXTO.
  inputTextSquare: {
    borderRadius: 2,
    borderColor: 'purple',
    // Para que el texto de dentro tenga padding.
    padding: 10,
  },
  // Contenedor de botones: Login, Sign In.
  buttonsWrapper: {
    flex: 1,
  },
});

export default loginStyles;
