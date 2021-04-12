import React from 'react';
import Feed from '../Feed'
 import { 
     Container, 
     Banner, 
     Avatar, 
     ProfileData,
     EditButton,
     LocationIcon,
     CakeIcon,
     Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar></Avatar>
          </Banner>
          <ProfileData>
              <EditButton outlined>
                  Editar Perfil
              </EditButton>
              <h1>User Name</h1>
              <h2>@User_name</h2>
              <p>
                  Description of user
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      Sao Paulo
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido em 12 de abril de 1995
                  </li>
              </ul>
              <Followage>

                  <span>
                      Seguindo <strong> 820</strong>
                  </span>
                  <span>
                      <strong>16200 </strong> seguidores
                  </span>

              </Followage>
          </ProfileData>
          <Feed>

          </Feed>
      </Container>
  );
}

export default ProfilePage;