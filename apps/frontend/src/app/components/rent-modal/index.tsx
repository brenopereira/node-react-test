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
  SelectControl,
} from './styles';
import api from '../../services/api';

const RentModal = ({
  clientId,
  show,
  setShow,
  refresh,
}: {
  clientId: string;
  show: boolean;
  setShow: (status: boolean) => void;
  refresh: () => void;
}) => {
  const [data, setData] = useState({
    copyId: '',
    clientId,
    expires_at: '',
  });
  const [books, setBooks] = useState([]);
  const [copies, setCopies] = useState([]);

  useEffect(() => {
    api
      .get('/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch(() => {
        alert('Houve uma falha ao listar os livros.');
      });
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setShow(false);
  };

  const handleCreateRent = () => {
    api
      .post('/rents', { ...data })
      .then(() => {
        alert('Aluguel realizado com sucesso!');
        setShow(false);
      })
      .catch(() => {
        alert(
          'Verifique os campos, não foi possível realizar o aluguel ao cliente.'
        );
      });
  };

  const handleChangeBook = (id: string) => {
    api
      .get(`/books/${id}`)
      .then((response) => {
        setCopies(response.data.book_copies);
      })
      .catch(() => {
        alert('Nenhum livro disponível.');
      });
  };

  if (!show) return null;

  return (
    <Container>
      <Content>
        <ModalContainer>
          <ModalContent>
            <Form>
              <h1>Alugar um livro</h1>

              <FormGroup>
                <Label>Livro</Label>
                <SelectControl
                  onChange={(e) => handleChangeBook(e.target.value)}
                  placeholder="Selecione um livro"
                >
                  <option>Selecione um livro</option>
                  {books.map((book: { id: number; title: string }) => (
                    <option value={book.id}>{book.title}</option>
                  ))}
                </SelectControl>
              </FormGroup>
              <FormGroup>
                <Label>Cópias disponíveis</Label>
                <SelectControl
                  onChange={(e) =>
                    setData({
                      ...data,
                      copyId: e.target.value,
                    })
                  }
                  name="copyId"
                  placeholder="Selecione a copia do livro"
                >
                  <option>Selecione uma cópia disponível</option>
                  {copies.map(
                    (copy: { id: number; copy_code: string; isbn: string }) => (
                      <option value={copy.id}>
                        {copy.copy_code} - ISBN {copy.isbn}
                      </option>
                    )
                  )}
                </SelectControl>
              </FormGroup>
              <FormGroup>
                <Label>Data de devolução</Label>
                <FormControl
                  onChange={handleInput}
                  name="expires_at"
                  type="date"
                  placeholder="Selecione a data para devolução"
                />
              </FormGroup>

              <FormGroup>
                <Button onClick={handleCreateRent} type="submit">
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

export default RentModal;
