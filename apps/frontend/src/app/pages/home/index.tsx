import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
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
import CreateClientModal from '../../components/create-client-modal';
import RentModal from '../../components/rent-modal';

const Home = () => {
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState('');
  const [showClientModal, setShowClientModal] = useState(false);
  const [showRentModal, setShowRentModal] = useState(false);

  const fetchClients = () => {
    api
      .get('/clients')
      .then((response) => setClients(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchClients();
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
        <CreateClientModal
          show={showClientModal}
          setShow={setShowClientModal}
          refresh={fetchClients}
        />
        <RentModal
          clientId={clientId}
          show={showRentModal}
          setShow={setShowRentModal}
          refresh={fetchClients}
        />
        <h2>Clientes</h2>

        <ClientContainer>
          {clients.map(
            (client: {
              id: string;
              name: string;
              birth_date: string;
              document: string;
              address: string;
              city: string;
              state: string;
            }) => (
              <Client
                onClick={() => {
                  setClientId(client.id);
                  setShowRentModal(true);
                }}
              >
                <h1>{client.name}</h1>
                <p>
                  <strong>Nascimento: </strong>
                  {client.birth_date}
                </p>
                <p>
                  <strong>CPF: </strong>
                  {client.document}
                </p>
                <p>
                  <strong>Endereço: </strong>
                  {client.address}
                </p>
                <p>
                  <strong>Localização: </strong>
                  {client.state} - {client.city}
                </p>
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

export default Home;
