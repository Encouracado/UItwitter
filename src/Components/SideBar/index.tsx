import React from 'react';
import List from '../Lists';
import FollowSugestion from '../FollowSugestion';
import StickyBox from 'react-sticky-box';
import News from '../News';
import {
  Container,
  SearchWrapper,
  SearchInput,
  Body,
  SearchIcon,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="find" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Maybe you Like"
            elements={[
              <FollowSugestion name="UserName" nickname="@Username" />,
              <FollowSugestion name="UserName" nickname="@Username" />,
              <FollowSugestion name="UserName" nickname="@Username" />,
            ]}
          />
          <List
            title="Important Assunt"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Important Assunt"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Important Assunt"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
