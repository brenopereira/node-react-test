import React, { useState } from 'react';
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

const Signin = () => {
  const [credentails, setCredentials] = useState({
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
      .post('/auth/login', { ...credentails })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        window.location.href = '/';
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
              Logar
            </Button>
          </FormGroup>
        </Form>
      </Content>
    </Container>
  );
};

export default Signin;
