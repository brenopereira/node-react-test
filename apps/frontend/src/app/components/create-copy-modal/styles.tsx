import styled from 'styled-components';

export const Container = styled.div`
  .fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }

  .fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
`;

export const Content = styled.div``;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5000;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 5001;
  width: 40%;
  right: 30%;
  top: 10vw;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  background: #f7f7f7;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    width: 90%;
    right: 5%;
  }
`;

export const ModalContent = styled.div`
  padding: 40px 30px;

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow: overlay;
  }
`;

export const Form = styled.div`
  h1 {
    margin-bottom: 20px;
    font-size: 22px;
  }
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
  cursor: pointer;
`;
