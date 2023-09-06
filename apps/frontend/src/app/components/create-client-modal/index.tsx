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
import axios from 'axios';
import api from '../../services/api';

const CreateClientModal = ({
  show,
  setShow,
  refresh,
}: {
  show: boolean;
  setShow: (status: boolean) => void;
  refresh: () => void;
}) => {
  const [credentails, setCredentials] = useState({
    name: '',
    birth_date: '',
    document: '',
    address: '',
    state: '',
    city: '',
  });

  const [zipcode, setZipcode] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setShow(false);
  };

  const handleChangeZipcode = () => {
    if (zipcode.length === 8 || zipcode.length === 9) {
      axios
        .get(`https://viacep.com.br/ws/${zipcode}/json/`)
        .then((response) => {
          console.log(response.data);
          setCredentials({
            ...credentails,
            address: `${response.data.logradouro}, ${response.data.bairro}, ${response.data.cep}`,
            state: response.data.uf,
            city: response.data.localidade,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCreateClient = () => {
    api
      .post('/clients', { ...credentails })
      .then(() => {
        refresh();
        alert('Cliente cadastrado com sucesso!');
      })
      .catch(() => {
        alert('Verifique os campos, não foi possível cadastrar o cliente.');
      });
  };

  if (!show) return null;

  return (
    <Container>
      <Content>
        <ModalContainer>
          <ModalContent>
            <Form>
              <h1>Cadastrar um novo cliente</h1>

              <FormGroup>
                <Label>Nome</Label>
                <FormControl
                  onChange={handleInput}
                  name="name"
                  type="text"
                  placeholder="Digite o nome"
                />
              </FormGroup>
              <FormGroup>
                <Label>Data de nascimento</Label>
                <FormControl
                  onChange={handleInput}
                  name="birth_date"
                  type="text"
                  placeholder="Digite a data de nascimento"
                />
              </FormGroup>
              <FormGroup>
                <Label>CPF</Label>
                <FormControl
                  onChange={handleInput}
                  name="document"
                  type="text"
                  placeholder="Digite o CPF do cliente"
                />
              </FormGroup>

              <FormGroup>
                <Label>CEP (Código postal)</Label>
                <FormControl
                  onChange={(e) => setZipcode(e.target.value)}
                  onBlur={handleChangeZipcode}
                  name="zipcode"
                  type="text"
                  placeholder="Digite o CEP do cliente"
                />
              </FormGroup>

              <FormGroup>
                <Label>Endereço (Autopreenchido)</Label>
                <FormControl
                  name="address"
                  type="text"
                  disabled
                  readOnly
                  value={credentails.address}
                  placeholder="Digite o CEP do cliente"
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

export default CreateClientModal;
