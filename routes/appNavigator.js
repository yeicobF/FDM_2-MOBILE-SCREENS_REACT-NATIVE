// Vi este programa en uno de los comentarios del video en donde se indicaba una
// nueva forma de hacer lo del navegador.
//
// - COMENTARIO DE: Alberto Forcato
//
// https://www.youtube.com/watch?v=cS4PgI3zBzY&t=1s&ab_channel=TheNetNinja
//
// DOCUMENTACIÓN REACT NATIVE:
// https://reactnative.dev/docs/navigation
// https://reactnavigation.org/docs/hello-react-navigation/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import ProductOverview from "../screens/productOverview";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  // NO MOSTRAR EL HEADER, QUE SE VE FEO.
  // Stack.Navigator
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    {/* //other options: "float", "screen" */}
    {/* Stack.Screen */}
    <Screen name="Login" component={Login} />
    <Screen name="Product Overview" component={ProductOverview} />
  </Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
