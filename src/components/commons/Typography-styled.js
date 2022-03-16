import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$color ?? `#000`};
  line-height: ${(props) => props.$lineHeight};
  text-align: ${(props) => props.$textAlign ?? "center"};
  margin-top: ${(props) => props.$marginTop ?? 0};
  margin-bottom: ${(props) => props.$marginBottom ?? 0};
  margin-left: ${(props) => props.$marginLeft ?? 0};
  margin-right: ${(props) => props.$marginRight ?? 0};
`;
