import styled from 'styled-components';
import Button from '../Button'
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div{
      display: flex;
      align-items: center
  }
`;

export const Avatar  = styled.div`
  width: 49px;
  height:49px;
  border-radius: 50%;
  margin-right: 10px;
  background: var(--gray);
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
 
  >span{
    font-size: 14px;
    color: var(--gray);
  }
  >strong{
      font-size: 14px;
  }
`;
export const FollowButton = styled(Button)`
   padding: 6px 17px;
   
`;