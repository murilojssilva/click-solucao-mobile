import {
  PostComments,
  PostContainer,
  PostDescription,
  PostFooter,
  PostImage,
  PostLikes,
  PostName,
  PostPhoto,
  PostTitle,
  PostInfos,
  Icon,
} from "./styles";

export function Post({ name, title, description, likes, comments, photo }) {
  return (
    <PostContainer>
      <PostImage>
        <PostPhoto
          source={{
            uri: photo,
          }}
        />
      </PostImage>
      <PostInfos>
        <PostName>{name}</PostName>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostFooter>
          <PostComments>
            <Icon name="message-circle" /> {comments}
          </PostComments>
          <PostLikes>
            <Icon name="heart" /> {likes}
          </PostLikes>
        </PostFooter>
      </PostInfos>
    </PostContainer>
  );
}
