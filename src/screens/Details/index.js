import {
  DetailsButtons,
  Icon,
  DetailsCampus,
  DetailsCategories,
  DetailsComment,
  DetailsCommentHeader,
  DetailsCommentPhoto,
  DetailsComments,
  DetailsCommentText,
  DetailsCommentTitle,
  DetailsContainer,
  DetailsContent,
  DetailsDescription,
  DetailsEdit,
  DetailsHeader,
  DetailsInfo,
  DetailsInfoTitle,
  DetailsLocal,
  DetailsName,
  DetailsPhoto,
  DetailsRemove,
} from "./styles";

export function Details() {
  return (
    <DetailsContainer>
      <DetailsContent>
        <DetailsHeader>
          <DetailsPhoto
            source={{
              uri: "https://carlabergonse.com.br/wp-content/uploads/2020/05/lixeira-coleta-seletiva.png",
            }}
          />
          <DetailsName>Colocação de lixeiras</DetailsName>
        </DetailsHeader>
        <DetailsDescription>
          Colocação de lixeiras com separação por tipos nas áreas interna e
          externa da Universidade
        </DetailsDescription>
        <DetailsInfo>
          <DetailsInfoTitle>Campus</DetailsInfoTitle>
          <DetailsCampus>Maracanã</DetailsCampus>
        </DetailsInfo>
        <DetailsInfo>
          <DetailsInfoTitle>Local</DetailsInfoTitle>
          <DetailsLocal>Todo o Campus</DetailsLocal>
        </DetailsInfo>
        <DetailsInfo>
          <DetailsInfoTitle>Categorias</DetailsInfoTitle>
          <DetailsCategories>Limpeza, bem estar</DetailsCategories>
        </DetailsInfo>
        <DetailsComments>
          <DetailsComment>
            <DetailsCommentHeader>
              <DetailsCommentPhoto
                source={{
                  uri: "https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png",
                }}
              />
              <DetailsCommentTitle>Comentarista 1</DetailsCommentTitle>
            </DetailsCommentHeader>
            <DetailsCommentText>Lorem Lorem Lorem</DetailsCommentText>
          </DetailsComment>
          <DetailsComment>
            <DetailsCommentHeader>
              <DetailsCommentPhoto
                source={{
                  uri: "https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png",
                }}
              />
              <DetailsCommentTitle>Comentarista 2</DetailsCommentTitle>
            </DetailsCommentHeader>
            <DetailsCommentText>Lorem Lorem Lorem</DetailsCommentText>
          </DetailsComment>
        </DetailsComments>
        <DetailsButtons>
          <DetailsEdit>
            <Icon name="edit" />
          </DetailsEdit>
          <DetailsRemove>
            <Icon name="trash-2" />
          </DetailsRemove>
        </DetailsButtons>
      </DetailsContent>
    </DetailsContainer>
  );
}
