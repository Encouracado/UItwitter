import React from 'react';
import ProfilePage from '../Profile';

 import { 
    Container, 
    Header, 
    Backicon, 
    Profileinfo, 
    HomeIcon, 
    BottonMenu, 
    SearchIcon, 
    BellIcon, 
    EmailIcon 
} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <Backicon></Backicon>
              </button>
              <Profileinfo>
                  <strong>UserName</strong>
                  <span>220 tweets</span>
              </Profileinfo>
          </Header>
          <ProfilePage />
          <BottonMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottonMenu>
      </Container>

  )
}

export default Main;