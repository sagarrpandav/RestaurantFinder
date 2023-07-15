import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "../features/restaurants/screens/RestaurantsScreen/StyledElements";
import { LocationContext } from "../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        elevation={2}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
