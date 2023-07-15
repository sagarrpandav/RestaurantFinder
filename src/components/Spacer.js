import React from "react";
import { View } from "react-native";
import { styled } from "styled-components/native";

const TopSmall = styled(View)`
  margin-top: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => spaces.sm};
`;

const TopMedium = styled(View)`
  margin-top: ${({
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

const TopLarge = styled(View)`
  margin-top: ${({
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

const TopExtraLarge = styled(View)`
  margin-top: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => spaces.xl};
`;

const LeftSmall = styled(View)`
  margin-left: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => spaces.sm};
`;

const LeftMedium = styled(View)`
  margin-left: ${({
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

const LeftLarge = styled(View)`
  margin-left: ${({
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

const LeftExtraLarge = styled(View)`
  margin-left: ${({
    theme: {
      colors,
      spaces,
      lineHeights,
      sizes,
      fonts,
      fontSizes,
      fontWeights,
    },
  }) => spaces.xl};
`;

export const Spacer = ({ variant }) => {
  switch (variant) {
    case "left.sm":
      return <LeftSmall />;
    case "left.md":
      return <LeftMedium />;
    case "left.lg":
      return <LeftLarge />;
    case "left.xl":
      return <LeftExtraLarge />;
    case "top.sm":
      return <TopSmall />;
    case "top.md":
      return <TopMedium />;
    case "top.lg":
      return <TopLarge />;
    case "top.xl":
      return <TopExtraLarge />;
  }
};
