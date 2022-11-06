import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const PostContainer = styled.View`
  width: 90%;
  justify-content: space-between;
  flex-direction: row;

  padding: ${RFValue(16)}px;
  background-color: ${(props) => props.theme.colors.posts};
  margin: ${RFValue(8)}px;
  border-radius: 8px;
`;

export const PostImage = styled.View``;

export const PostPhoto = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;

  border-radius: 10px;
`;

export const PostInfos = styled.View`
  margin-left: ${RFValue(5)}px;
`;

export const PostName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;
export const PostTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const PostDescription = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const PostFooter = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;

  color: ${(props) => props.theme.colors.text};
`;

export const PostComments = styled.Text`
  margin-right: 10px;
`;
export const PostLikes = styled.Text`
  margin-right: 10px;
`;
