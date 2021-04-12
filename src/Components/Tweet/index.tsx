import React from 'react';

 import { 
   Container, 
   Retweeted, 
   IconTweet,
   Body,
   Avatar,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon,
    } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      
      <Retweeted>
       <IconTweet />
         Voce Retwetou
      </Retweeted>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Name of Tweet</strong>
            <span>@user</span>
            <Dot />
            <time>10 de abril</time>
          </Header>
          <Description>Text of tweet</Description>
          <ImageContent></ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              27
            </Status>
            <Status>
              <RetweetIcon />
              27
            </Status>
            <Status>
              <LikeIcon />
              27
            </Status>
            
            
          </Icons>
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;