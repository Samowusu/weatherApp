import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DropDownIcon from "../../assets/svgs/DropDownIcon";
import { Theme } from "../../Theme";
import Typography from "../commons/Typography";

const options = ["Kaikki kaupungit", "Tampere", "Jyväskylä", "Kuopio", "Espoo"];

function DropDown({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectOptionHandler = (value) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader
        onClick={toggleHandler}
        $backgroundColor={Theme.white}
        $borderColor={Theme.ash}
      >
        <Typography fontSize={"m"} color={"black"}>
          {selectedOption || "Kaikki kaupungit"}
        </Typography>
        <DropDownIcon />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => (
              <ListItem onClick={() => selectOptionHandler(option)} key={index}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default DropDown;

const DropDownContainer = styled("div")`
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-size: 13px;
  /* color: ${(props) => props.$color ?? "black"}; */
  background: ${(props) => props.$backgroundColor ?? "transparent"};
  border-radius: 4px;
  border: 1px solid ${(props) => props.$borderColor ?? "none"};
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding-left: 5px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  color: #262626;
  font-size: 13px;
`;

const ListItem = styled("li")`
  list-style: none;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;
