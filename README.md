## O contexto

Foi utilizado o NX para fazer um monorepo onde encontra-se no mesmo projeto API com NestJS e frontend com ReactJS + styled-components.

O banco de dados como foi utilizado em diversos pontos da aplicação, foi isolado em uma lib juntamente com o schema do prisma, onde ao criar um novo módulo, basta importar o modulo da lib do banco de dados e o serviço já criado na lib também referente ao prisma.

A parte de autenticação também foi isolada devido ao JWT, onde é utilizado em todos os módulos.

## Docker

O projeto utiliza o docker para subir um container do PostgreSQL para conectar com a API através do Prisma.

- Para iniciar o container do PostgreSQL através do docker-compose, basta digitar `docker-compose up -d` e o projeto levantará um container com as configurações indicadas no arquivo docker-compose.yml, não é necessário alterar as credenciais.

## Docker

O Prisma foi utilizado neste projeto, não foi possível automatizar o init dele e devido a isso, deverá ser feito manualmente o generate e o migrate.

- Para migrar o banco usando o prisma, você deve através do terminal na pasta do projeto, acessar `libs/database/prisma` e executar o comando `npx prisma migrate dev`

- Para efetuar o generate do prisma, você deve através do terminal na pasta do projeto, acessar `libs/database/prisma` e executar o comando `npx prisma generate`

## Como iniciar as aplicações

O projeto deve ser iniciado em etapas:

- Iniciar a API utilizando o comando `yarn start:api`, após inicializar a API estará rodando no endereço: http://localhost:3000

- Iniciar o Frontend em React utilizando o comando `yarn start:frontend`, após inicializar a API estará rodando no endereço: http://localhost:4200

## Documentação da API

A documentação de todos os 19 endpoints criados estão dentro do arquivo `FCamara.postman_collection.json` e nele consta todas as requisições, parâmetros e body necessários para efetuar a request.

## Problemática

Não foi possível pelo tempo, utilizar algum mutador de estado como Redux ou Context API, além disso, todas as telas não foram desenvolvidas pelo tempo, porém todos os endpoints foram desenvolvidos para todas as entidades e documentadas.

## Testes

- Ao logar, é necessário criar um livro na plataforam e adicionar uma cópia.
- Para efetuar a reserva do livro, é necessário cadastrar um cliente na aba cliente.
- Para efetuar a reserva, você deverá clicar no nome do cliente (na aba clientes) e será aberto o modal, após isso você poderá selecionar o livro e ele somente os que não estão reservados estarão disponíveis para reserva, então no select somente o disponíveis irão aparecer. Depois, preencha a data que você deseja que o cliente retorne o livro.

## Regras

No use case da reserva temos duas verificações

- Não é possível alugar um livro cuja a cópia já esteja alugada
- Não é possível alugar um livro caso o cliente tenha atrasado 2x a devolução

## Tecnoligia do Frontend

- React
- Styled-Components
- Axios
