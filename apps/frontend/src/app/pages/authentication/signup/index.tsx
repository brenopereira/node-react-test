import React, { useEffect, useState } from 'react';
import {
  BrandContainer,
  BrandTitle,
  Button,
  Container,
  Content,
  Form,
  FormControl,
  FormGroup,
  Label,
  Logo,
} from './styles';
import api from '../../../services/api';

const Signup = () => {
  const [credentails, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    api
      .post('/auth/register', { ...credentails })
      .then(() => {
        alert('Conta criada com sucesso!');
        window.location.href = '/signin';
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Content>
        <BrandContainer>
          <Logo src="https://fcamara.com/wp-content/uploads/2023/04/logo-white-fcamara-300x50.png" />
          <BrandTitle>Acesse a biblioteca</BrandTitle>
        </BrandContainer>

        <Form>
          <FormGroup>
            <Label>Nome completo</Label>
            <FormControl
              name="name"
              onChange={handleInput}
              type="text"
              placeholder="Digite o seu nome"
              value={credentails.name}
            />
          </FormGroup>
          <FormGroup>
            <Label>E-mail</Label>
            <FormControl
              name="email"
              onChange={handleInput}
              type="text"
              placeholder="Digite o seu e-mail"
              value={credentails.email}
            />
          </FormGroup>
          <FormGroup>
            <Label>Senha</Label>
            <FormControl
              name="password"
              onChange={handleInput}
              type="password"
              placeholder="Digite a sua senha"
              value={credentails.password}
            />
          </FormGroup>

          <FormGroup>
            <Button onClick={handleSubmit} type="submit">
              Cadastrar
            </Button>
          </FormGroup>
        </Form>
      </Content>
    </Container>
  );
};

export default Signup;
