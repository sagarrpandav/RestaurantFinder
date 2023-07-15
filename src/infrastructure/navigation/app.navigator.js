import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen/RestaurantsScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantNavigator } from "./restaurants.navigator";

const SCREEN_NAMES = {
  RESTAURANTS: "Restaurants",
  MAP: "Map",
  SETTINGS: "Settings",
};
const TAB_ICONS = {
  [SCREEN_NAMES.RESTAURANTS]: "restaurant-outline",
  [SCREEN_NAMES.MAP]: "map-outline",
  [SCREEN_NAMES.SETTINGS]: "settings-outline",
};
const Tab = createBottomTabNavigator();
const tabBarIcon =
  (iconName) =>
  ({ color, size }) => <Ionicons name={iconName} size={size} color={color} />;
const screenOptions = ({ route: { name } }) => {
  const iconName = TAB_ICONS[name];
  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};
const MyTabs = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="Restaurants"
      component={RestaurantNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Map"
      component={RestaurantsScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Settings"
      component={RestaurantsScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
);
