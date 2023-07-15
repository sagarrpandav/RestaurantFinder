import { locations } from "./mock/locations";
import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return new Promise((res, rej) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      rej("Location not found!");
    }
    res(locationMock);
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results[0]);
  const { lng: longitude, lat: latitude } = geometry.location;
  return { longitude, latitude };
};
