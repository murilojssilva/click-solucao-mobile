import { Post } from "./Post";
import { PostsContainer } from "./styles";

export function Posts() {
  return (
    <PostsContainer>
      <Post
        photo="https://tnaplast.com.br/wp-content/uploads/2020/11/lixeiras-de-coleta-seletiva-larplasticos-1.jpg"
        title="Coleta de lixo"
        name="Usuário 1"
        description="Lorem lorem lorem lorem lorem lorem"
        comments="10"
        likes="25"
      />
      <Post
        photo="https://maceio.al.gov.br/uploads/imagens/wp-content/uploads/2021/10/jpg/2021/10/poda-de-arvores-merece-atencao1553628339.jpg"
        title="Poda de árvore"
        name="Usuário 2"
        description="Lorem lorem lorem lorem lorem lorem"
        comments="1"
        likes="5"
      />
      <Post
        photo="https://www.dicasdemulher.com.br/wp-content/uploads/2015/10/yoga-0.jpg"
        title="Yoga"
        name="Usuário 3"
        description="Lorem lorem lorem lorem lorem lorem"
        comments="0"
        likes="2"
      />
      <Post
        photo="https://www.dfl.com.br/wp-content/uploads/2021/11/odontologia-1-1080x675.jpg"
        title="Evento de odonto"
        name="Usuário 4"
        description="Lorem lorem lorem lorem lorem lorem"
        comments="34"
        likes="250"
      />
    </PostsContainer>
  );
}
