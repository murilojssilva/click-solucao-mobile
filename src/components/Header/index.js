import {
  HeaderContainer,
  HeaderContent,
  Icon,
  Photo,
  UserHello,
  UserInfo,
  UserName,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Photo
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
        />
        <UserInfo>
          <UserHello>Olá</UserHello>
          <UserName>Usuário</UserName>
        </UserInfo>
      </HeaderContent>
      <Icon name="power" />
    </HeaderContainer>
  );
}
