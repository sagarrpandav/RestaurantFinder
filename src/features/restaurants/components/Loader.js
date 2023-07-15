import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { styled } from "styled-components/native";

const ActivityContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Loader = () => {
  return (
    <ActivityContainer>
      <ActivityIndicator animating={true} size="large" />
    </ActivityContainer>
  );
};
