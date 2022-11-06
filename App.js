import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Welcome } from "./src/screens/Welcome";
import { Details } from "./src/screens/Details";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  );
}
