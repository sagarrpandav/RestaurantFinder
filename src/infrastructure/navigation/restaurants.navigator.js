import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen/RestaurantsScreen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  );
};
