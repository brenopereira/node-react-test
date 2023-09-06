import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4c4540;
  height: 100vh;
  width: 100vw;
`;

export const BrandContainer = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const BrandTitle = styled.h1`
  color: #fff;
  font-size: 26px;
  margin: 20px 0;
`;

export const Content = styled.div`
  margin: auto auto;
  width: 500px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Form = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 16px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 6px;
  font-size: 14px;
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #c3c3c3;
`;

export const Button = styled.button`
  background-color: #ff5c35;
  width: 100%;
  padding: 12px;
  border: none;
  color: #fff;
  font-weight: bold;
`;
