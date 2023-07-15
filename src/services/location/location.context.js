import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    try {
      if (keyword.length === 0) {
        return;
      }
      setIsLoading(true);
      locationRequest(keyword.toLowerCase()).then((res) => {
        setIsLoading(false);
        setLocation(locationTransform(res));
      });
    } catch (err) {
      setError(err);
    }
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        keyword,
        location,
        isLoading,
        error,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
