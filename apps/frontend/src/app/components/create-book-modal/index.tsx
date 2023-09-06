import React, { useState } from 'react';
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

const CreateBookModal = ({
  show,
  setShow,
  refresh,
}: {
  show: boolean;
  setShow: (status: boolean) => void;
  refresh: () => void;
}) => {
  const [data, setData] = useState({
    title: '',
    author: '',
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

  const handleCreateClient = () => {
    api
      .post('/books', { ...data })
      .then(() => {
        refresh();
        alert('Livro cadastrado com sucesso!');
      })
      .catch(() => {
        alert('Verifique os campos, não foi possível cadastrar o livro.');
      });
  };

  if (!show) return null;

  return (
    <Container>
      <Content>
        <ModalContainer>
          <ModalContent>
            <Form>
              <h1>Cadastrar um novo livro</h1>

              <FormGroup>
                <Label>Título</Label>
                <FormControl
                  onChange={handleInput}
                  name="title"
                  type="text"
                  placeholder="Digite o título"
                />
              </FormGroup>
              <FormGroup>
                <Label>Autor</Label>
                <FormControl
                  onChange={handleInput}
                  name="author"
                  type="text"
                  placeholder="Digite o autor"
                />
              </FormGroup>
              <FormGroup>
                <Button onClick={handleCreateClient} type="submit">
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

export default CreateBookModal;
