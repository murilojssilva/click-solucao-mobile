import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  padding: 40px;
  justify-content: space-between;
`;
export const WelcomeImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;

  border-radius: 10px;
`;

export const WelcomeTitle = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${RFValue(40)}px;
  margin-top: ${RFValue(40)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const WelcomeInputTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const WelcomeInput = styled.View`
  padding: ${RFValue(20)}px;
  background-color: ${(props) => props.theme.colors.posts};
  border-radius: 6px;
  width: 100%;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.primary};
`;

export const WelcomeTitleRed = styled.Text`
  color: ${(props) => props.theme.colors.secundary};
`;

export const WelcomeInputInfos = styled.View`
  width: 100%;
  justify-content: center;
`;

export const WelcomeButton = styled.View`
  padding: ${RFValue(20)}px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
`;

export const WelcomeButtonText = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;
