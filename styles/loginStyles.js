// ESTILOS QUE SERÁN UTILIZADOS EN EL LOGIN SOLAMENTE.

import { StyleSheet } from 'react-native';

// VARIABLE CON LOS TONOS DEL PÚRPURA, PARA VER CUÁL UTILIZAR.
const purpleTones = [
  "#7c54c4",
  "#9474cc",
  "#845cc4",
  "#6e41bc",
];

const loginStyles = StyleSheet.create({
  // Wrapper de TODO el contenido, ya que está como centrado con unos paddings
  // a los alrededores y todo está ahí dentro.
  contentWrapper: {
    // Que ocupe TODO EL ESPACIO DE LA PANTALLA.
    flex: 1,
    // MÁRGENES EN TODOS LADOS.
    margin: 70,
    // EL MARGEN SUPERIOR DE 70 SE SUSTITUYE POR ESTE.
    marginTop: 107,
    // flexDirection: 'row',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: "30 30 30 30",
    // color: "white",
  },
  // Wrapper del contenedor del logo y su texto inferior.
  logoContentWrapper: {
    // Serán 3 contenedores en total, por lo que este medirá 1/3 del padre.
    // flex: 1,
    color: '#F279F2',
    alignItems: 'center',
  },
  logo: {
    width: 98,
    height: 98,
  },
  // Tengo que hacerlo por separado porque los estilos no se heredan a los
  // elementos anidados como en CSS, por lo que poner las propiedades del padre
  // en cuanto al texto,  aplicarían en los hijos, como el "Your Company" en
  // este caso.
  yourCompanyText: {
    // backgroundColor: '#79F2E0',
    fontFamily: 'raleway-medium',
    fontSize: 34,
    // fontWeight cambia la fuente y no la deja modificar.
    // fontWeight: "500",
    color: "black",
    height: 45,
    // QUITAMOS EL PADDING SUPERIOR QUE SE LE HACÍA AL TEXTO.
    includeFontPadding: false,
    marginTop: 6,
  },
  // CONTENEDOR DE LAS ENTRADAS DE TEXTO: Usuario, Contraseña.
  inputTextWrapper: {
    flex: 1,
    marginTop: 93,
    maxHeight: 196,
    minHeight: 196,
    // flexDirection: 'row'
    justifyContent: 'space-between',
  },
  // Texto superior a los cuadros con la contraseña.
  inputTextAboveText: {
    paddingLeft: 7,
    // backgroundColor: '#79F2E0',
    // fontFamily: 'raleway-variable',
    // fontWeight: 'bold',
    // fontFamily: 'raleway-bold',
    fontFamily: 'raleway-bold',
    fontSize: 11,
    color: purpleTones[3],
    marginBottom: 3,
  },
  // CUADROS DE ENTRADA DE TEXTO.
  inputTextSquare: {
    flexDirection: 'row',

    borderRadius: 5,
    borderWidth: 3,
    borderColor: purpleTones[3],
    minWidth: '100%',
    minHeight: 62,
    // Para que el texto de dentro tenga padding.
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // SOLAMENTE LO DE LA ENTRADA DE TEXTO.
  inputText: {
    flex: 1,
    fontFamily: 'raleway-medium',
    fontSize: 20,
    includeFontPadding: false,
  },
  eraseIcon: {
    resizeMode: 'contain',
    // aspectRatio: 1,
    // width: ,
    height: 30,
    width: 30,
    marginLeft: 5,
    // justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
  },
  // Contenedor de botones: Login, Sign In.
  buttonsWrapper: {
    paddingTop: 60,
    maxHeight: 196,
    minHeight: 196,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // alignItems: 'stretch',
  },
  button: {
    backgroundColor: "#ff6c3c",
    // color: "#ff6c3c",
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 80,
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderRadius: 4,
  },
  // Es el texto que utilizaré para ponerle bordes con SVG, dado que fue la
  // respuesta que encontré para hacerlo.
  // https://stackoverflow.com/questions/60377239/adding-a-solid-stroke-to-text
  buttonTextWithSVG: {
    fontSize: 20,
    fontWeight: "bold",
    // fill: "none",
    // stroke: "purple",
    // x: "100",
    // y: "20",
    // textAnchor: "middle",
  },
  buttonText: {
    fontFamily: 'raleway-bold',
    fontSize: 14,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 5,
    color: '#FFFFFF',
    textShadowColor: 'black',
    shadowOpacity: 1,
    // PARA QUE EL TEXTO ORIGINAL VAYA ENCIMA DE LA SOMBRA.
    zIndex: 1,
  },
  // EL BORDE DEL TEXTO DENTRO DEL BOTÓN. No quedó tan bien, pero más o menos.
  buttonTextBorder: {
    color: 'black',
    fontSize: 15,
    position: 'absolute',
    left: 14,
    top: 5,
    zIndex: 0,
  },
});

export default loginStyles;
