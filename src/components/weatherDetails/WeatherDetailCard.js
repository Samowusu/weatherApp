import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";
import {
  TextContainer,
  IconContainer,
} from "../weatherSummary/WeatherSummaryTop";
import { Theme } from "../../Theme";
import SunIcon from "../../assets/svgs/SunIcon";

WeatherDetailCard.defaultProps = {
  time: "15:00",
  temperature: "-1°C",
  wind: "2.1 m/s",
  humidity: "5 %",
  precipitation: "10 mm",
};

function WeatherDetailCard({
  time,
  temperature,
  wind,
  humidity,
  precipitation,
}) {
  return (
    <DetailCard $borderColor={Theme.ash}>
      <Typography fontSize={"m"} color="grey" marginBottom={"5px"}>
        {time}
      </Typography>
      <IconContainer>
        <SunIcon />
      </IconContainer>
      <Typography
        fontSize={"l"}
        color="black"
        marginTop={"5px"}
        marginBottom="5px"
      >
        {temperature}
      </Typography>
      <TextContainer $backgroundColor={Theme.lightBlue} $width={"100%"}>
        <Typography
          fontSize={"s"}
          color="grey"
          marginBottom={"3px"}
          marginTop={"5px"}
        >
          {wind}
        </Typography>
        <Typography fontSize={"s"} color="grey" marginBottom={"3px"}>
          {humidity}
        </Typography>
        <Typography fontSize={"s"} color="grey" marginBottom={"5px"}>
          {precipitation}
        </Typography>
      </TextContainer>
    </DetailCard>
  );
}

export default WeatherDetailCard;

const DetailCard = styled.div`
  width: 18%;
  max-width: 75px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
  border: 1px solid ${(props) => props.$borderColor ?? "none"};
  border-radius: 4px;
`;
