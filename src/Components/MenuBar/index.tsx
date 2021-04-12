import React from 'react';
import { 
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,   
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    ProfileData,
    ExitIcon,
    Avatar} from './styles';

const MenuBar: React.FC = () => {
  return (
  
  <Container>
    <TopSide>
        <Logo />
        <MenuButton>
            <HomeIcon />
            <span>Home</span>
        </MenuButton>
        <MenuButton>
            <BellIcon />
            <span>Notifications</span>
        </MenuButton>
        <MenuButton>
            <EmailIcon />
            <span>Messages</span>
        </MenuButton>
        <MenuButton>
            <FavoriteIcon />
            <span>Favorites</span>
        </MenuButton>
        <MenuButton>
            <ProfileIcon className="Active"/>
            <span>Profie</span>
        </MenuButton>
    </TopSide>
    <BotSide>
        <Avatar />
        <ProfileData>
            <strong>@Username</strong>
            <span>@email</span>
        </ProfileData>
        <ExitIcon />
    </BotSide>
  </Container>
  
  );
}

export default MenuBar;