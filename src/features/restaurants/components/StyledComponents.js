import { styled } from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

export const RestaurantCard = styled(Card)`
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
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
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
`;

export const Title = styled(Text)`
  font-family: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => fonts.heading};
  font-size: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => fontSizes.body};
  color: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => colors.ui.primary};
`;

export const Info = styled(View)`
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
  }) => spaces.lg};
`;

export const Address = styled(Text)`
  font-family: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => fonts.body};
  font-size: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => fontSizes.caption};
  color: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => colors.ui.primary};
`;

export const RatingContainer = styled(View)`
  flex-direction: row;
  padding-top: ${({
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
  padding-bottom: ${({
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

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ClosedTemporaliyText = styled(Text)`
  color: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => colors.text.error};
  font-family: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => fonts.body};
  font-size: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => fontSizes.caption};
`;
