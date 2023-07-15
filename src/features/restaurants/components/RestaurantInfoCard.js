import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/openIcon";
import { Spacer } from "../../../components/Spacer";
import {
  Address,
  ClosedTemporaliyText,
  Info,
  RatingContainer,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Title,
} from "./StyledComponents";

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = "Some Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Some Address",
    isOpen = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <RatingContainer>
            {Array.from(new Array(Math.floor(rating))).map((_, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
          </RatingContainer>
          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedTemporaliyText>CLOSED TEMPORARILY</ClosedTemporaliyText>
            )}
            <Spacer variant="left.lg" />
            {isOpen && <SvgXml xml={openIcon} height={20} width={20} />}
            <Spacer variant="left.lg" />
            <Image source={{ uri: icon }} width={15} height={15} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
