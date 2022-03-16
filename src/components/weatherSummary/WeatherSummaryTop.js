import React from "react";
import styled from "styled-components";
import CloudIcon from "../../assets/svgs/CloudIcon";
import Typography from "../commons/Typography";

WeatherSummaryTop.defaultProps = {
  city: "Helsinki",
  description: "Scattered clouds",
  temperature: "0 ° C",
};
function WeatherSummaryTop({ city, description, temperature }) {
  return (
    <WeatherSummaryTopContainer>
      <TextContainer>
        <Typography fontSize={"xl"} color="black" textAlign={"start"}>
          {city}
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"start"}>
          {description}
        </Typography>
      </TextContainer>
      <WeatherContainer>
        <IconContainer>
          <CloudIcon />
        </IconContainer>
        <Typography fontSize={"xxxl"} color="black" marginLeft={"10px"}>
          {temperature}
        </Typography>
      </WeatherContainer>
    </WeatherSummaryTopContainer>
  );
}

export default WeatherSummaryTop;

const WeatherSummaryTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
  width: ${(props) => props.$width ?? "none"};
`;

const WeatherContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconContainer = styled.div``;
