import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) {
      rej("Invalid Location!");
    }
    res(mock);
  });
};
export const restaurantsResponseTransform = ({ results }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      photos: restaurant.photos.map(
        (photo) => mockImages[Math.floor(Math.random() * mockImages.length)],
      ),
      address: restaurant.vicinity,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
