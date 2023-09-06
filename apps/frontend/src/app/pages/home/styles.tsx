import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1130px) {
    max-width: 90%;
  }

  h2 {
    padding: 0;
    margin: 24px 0;
  }
`;

export const LinkNavigate = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  margin-right: 8px;
  padding: 12px;
  background-color: #ff5c35;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`;
export const Nav = styled.div`
  background-color: #4c4540;
  padding: 20px;
`;

export const NavContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Logout = styled.button`
  background-color: #ff5c35;
  padding: 12px;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const ClientContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  gap: 16px;

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 561px) and (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Client = styled.div`
  background-color: #fbfbfb;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 1px 4px 4px rgb(0 0 0 / 5%);
  cursor: pointer;

  &:hover {
    box-shadow: 1px 4px 4px rgb(0 0 0 / 10%);
  }

  h1 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 8px;
  }
`;

export const AddClient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: bold;
  font-size: 24px;
`;
