import React, { createContext, useContext, useEffect, useState } from "react";
import {
  restaurantRequest,
  restaurantsResponseTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (location) {
      const locationString = `${location.latitude},${location.longitude}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  const retrieveRestaurants = (locationString) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(async () => {
      try {
        let results = await restaurantRequest(locationString);
        setIsLoading(false);
        setError(false);
        setRestaurants(restaurantsResponseTransform(results));
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }, 2000);
  };

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
