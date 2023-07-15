import { styled } from "styled-components/native";
import { SafeAreaView, StatusBar, View } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

export const SearchContainer = styled(View)`
  padding: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => spaces.md};
`;

export const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => colors.bg.secondary};
  padding: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => spaces.md};
`;
