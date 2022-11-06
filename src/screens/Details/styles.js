import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const DetailsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const DetailsContent = styled.View`
  padding: 16px;
  width: 90%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.posts};
`;

export const DetailsHeader = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DetailsPhoto = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(110)}px;

  border-radius: 10px;
`;

export const DetailsName = styled.Text`
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${RFValue(22)}px;
`;

export const DetailsDescription = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin: 5px 0%;
`;

export const DetailsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsInfoTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const DetailsCampus = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
export const DetailsLocal = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
export const DetailsCategories = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
export const DetailsComments = styled.View`
  padding: 16px 0;
  width: 100%;
`;
export const DetailsComment = styled.View`
  padding: 16px 0;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.text};
`;

export const DetailsCommentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DetailsCommentPhoto = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;

  border-radius: 100px;
`;

export const DetailsCommentTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
  margin-left: 5px;
  font-size: ${RFValue(20)}px;
`;
export const DetailsCommentText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const DetailsButtons = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`;

export const DetailsEdit = styled.View`
  padding: 32px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
`;

export const DetailsRemove = styled.View`
  padding: 32px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(32)}px;
  color: ${(props) => props.theme.colors.shape};
`;
