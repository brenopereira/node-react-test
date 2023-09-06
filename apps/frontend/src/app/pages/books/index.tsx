import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  Action,
  ActionContainer,
  AddClient,
  Client,
  ClientContainer,
  Container,
  Content,
  LinkNavigate,
  Logo,
  Logout,
  Nav,
  NavContainer,
} from './styles';
import CreateBookModal from '../../components/create-book-modal';
import CreateCopyModal from '../../components/create-copy-modal';
import ListCopiesModal from '../../components/list-copies-modal';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [copies, setCopies] = useState<any[]>([]);
  const [bookId, setBookId] = useState('');
  const [showClientModal, setShowClientModal] = useState(false);
  const [showCreateCopyModal, setShowCreateCopyModal] = useState(false);
  const [showListCopiesModal, setShowListCopiesModal] = useState(false);

  const fetchBooks = () => {
    api
      .get('/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (!localStorage.getItem('accessToken')) window.location.href = '/signin';

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/signin';
  };

  return (
    <Container>
      <Nav>
        <Content>
          <NavContainer>
            <Logo src="https://fcamara.com/wp-content/uploads/2023/04/logo-white-fcamara-300x50.png" />
            <Logout onClick={handleLogout}>Logout</Logout>
          </NavContainer>
        </Content>
      </Nav>

      <Content>
        <LinkNavigate to={'/'}>Clientes</LinkNavigate>
        <LinkNavigate to={'/books'}>Livros</LinkNavigate>
      </Content>

      <Content>
        <ListCopiesModal
          show={showListCopiesModal}
          setShow={setShowListCopiesModal}
          copies={copies}
        />
        <CreateBookModal
          show={showClientModal}
          setShow={setShowClientModal}
          refresh={fetchBooks}
        />
        <CreateCopyModal
          bookId={bookId}
          show={showCreateCopyModal}
          setShow={setShowCreateCopyModal}
          refresh={fetchBooks}
        />
        <h2>Livros</h2>

        <ClientContainer>
          {books.map(
            (book: {
              id: string;
              title: string;
              author: string;
              book_copies: any[];
            }) => (
              <Client key={book.id}>
                <h1>{book.title}</h1>
                <p>
                  <strong>Autor: </strong>
                  {book.author}
                </p>

                <ActionContainer>
                  <Action
                    onClick={() => {
                      setShowListCopiesModal(true);
                      setCopies(book.book_copies);
                    }}
                  >
                    Visualizar cópias
                  </Action>
                  <Action
                    onClick={() => {
                      setBookId(book.id);
                      setShowCreateCopyModal(true);
                    }}
                  >
                    Criar uma cópia
                  </Action>
                </ActionContainer>
              </Client>
            )
          )}
          <Client>
            <AddClient onClick={() => setShowClientModal(true)}>
              Adicionar novo
            </AddClient>
          </Client>
        </ClientContainer>
      </Content>
    </Container>
  );
};

export default Books;
