import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header title="Home" />
      <Posts />
    </HomeContainer>
  );
}
