import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/theme";
import {
  Oswald_400Regular,
  useFonts as useOswaldFonts,
} from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  useFonts as useLatoFonts,
} from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";

export default function App() {
  let [oswaldFontsLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });

  let [latoFontsLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  return (
    oswaldFontsLoaded &&
    latoFontsLoaded && (
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <AppNavigator />
          </RestaurantContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    )
  );
}
