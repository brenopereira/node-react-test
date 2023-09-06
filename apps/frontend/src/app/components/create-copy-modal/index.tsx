import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Content,
  Form,
  FormControl,
  FormGroup,
  Label,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles';
import api from '../../services/api';

const CreateCopyModal = ({
  show,
  setShow,
  refresh,
  bookId,
}: {
  bookId: string;
  show: boolean;
  setShow: (status: boolean) => void;
  refresh: () => void;
}) => {
  const [data, setData] = useState({
    isbn: '',
    copy_code: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setShow(false);
  };

  const handleCreateCopy = () => {
    api
      .post('/copies', { ...data, bookId })
      .then(() => {
        refresh();
        alert('Cópia do livro cadastrado com sucesso!');
      })
      .catch(() => {
        alert(
          'Verifique os campos, não foi possível cadastrar a cópia do livro.'
        );
      });
  };

  if (!show) return null;

  return (
    <Container>
      <Content>
        <ModalContainer>
          <ModalContent>
            <Form>
              <h1>Cadastrar uma cópia do livro</h1>
              <FormGroup>
                <Label>ISBN</Label>
                <FormControl
                  onChange={handleInput}
                  name="isbn"
                  type="text"
                  placeholder="Digite o ISBN"
                />
              </FormGroup>
              <FormGroup>
                <Label>Código</Label>
                <FormControl
                  onChange={handleInput}
                  name="copy_code"
                  type="text"
                  placeholder="Digite o código"
                />
              </FormGroup>
              <FormGroup>
                <Button onClick={handleCreateCopy} type="submit">
                  Cadastrar
                </Button>
              </FormGroup>
            </Form>
          </ModalContent>
        </ModalContainer>
      </Content>
      <ModalOverlay onMouseDown={handleClick} />
    </Container>
  );
};

export default CreateCopyModal;
