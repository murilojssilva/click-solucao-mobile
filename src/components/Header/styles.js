import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const HeaderContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;

  height: ${RFPercentage(20)}px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 0 ${RFValue(24)}px;
`;

export const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const UserInfo = styled.View`
  margin-left: ${RFValue(17)}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;

  border-radius: 10px;
`;

export const UserText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled(UserText)`
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const UserHello = styled(UserText)`
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${(props) => props.theme.colors.primary};
`;
