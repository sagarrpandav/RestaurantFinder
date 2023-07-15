import React, { useContext } from "react";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../../components/RestaurantInfoCard";
import { SafeArea } from "./StyledElements";
import { Spacer } from "../../../../components/Spacer";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { Loader } from "../../components/Loader";
import { Search } from "../../../../components/Search";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <>
              <Spacer variant="top.md" />
              <RestaurantInfoCard restaurant={item} />
            </>
          )}
          keyExtractor={(_, idx) => idx}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeArea>
  );
};
