import {
  WelcomeButton,
  WelcomeButtonText,
  WelcomeContainer,
  WelcomeImage,
  WelcomeInput,
  WelcomeInputInfos,
  WelcomeInputTitle,
  WelcomeTitle,
  WelcomeTitleRed,
} from "./styles";

import logo from "../../assets/logo.jpeg";

export function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeTitle>
        Olá! Este é o <WelcomeTitleRed>Click</WelcomeTitleRed>Solução.
      </WelcomeTitle>

      <WelcomeImage source={logo} />
      <WelcomeInputInfos>
        <WelcomeInputTitle>Matrícula</WelcomeInputTitle>

        <WelcomeInput></WelcomeInput>
      </WelcomeInputInfos>
      <WelcomeButton>
        <WelcomeButtonText>Entrar</WelcomeButtonText>
      </WelcomeButton>
    </WelcomeContainer>
  );
}
