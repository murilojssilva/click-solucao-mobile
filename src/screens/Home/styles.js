import { shape } from "prop-types";
import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.shape};
`;
