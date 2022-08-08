# TO DO LIST - API

## API criada para ter você ter a possibilidade de lidar com sua lista de afazeres de modo online

### DOC => https://documenter.getpostman.com/view/20351136/VUjMnkNT

### FUNCIONALIDADES

1 - CRUD -> Criar usário, listar usuário (paginação), listar por id, editar por id, deletar por id, logar por id


3 - CRUD -> Criar uma tarefa, listar tarefas, listar tarefa por id, editar tarefa, deletar tarefa

### RODAR O PROJETO NO BACK END

#### Instalações

1 - Necessário instalar docker e docker compose caso você não tenha

https://docs.docker.com/engine/install

e

https://docs.docker.com/compose/install/

2 - Clique no fork desse repositório, agora ele faz parte do seu github;

3 - Faça o clone:

```bash
git clone git@github.com:willmarques09/ToDoList.git
```

ou

```bash
git clone https://github.com/willmarques09/ToDoList.git
```

4 - Utilize o comando um gerenciamento de pacote para instalar todas as dependências necessárias

```bash
npm install
```

ou

```bash
yarn add
```

5 - Rode o Docker Compose

```bash
docker-compose up -d
```

6 - Rode as migrations

```bash
npx typeorm migration:run
```

ou

```bash
yarn typeorm migration:run
```

7 - Verifique se não tem nenhum erro

```bash
docker-compose logs -f
```

8 - Acesse o http://localhost:3333/

9 - Para rodar o teste

```bash
npm run test
```

ou

```bash
yarn test
```

## 8 - Ferramentas utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Typescript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Nodejs](https://img.shields.io/badge/node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![POSTGRESQL](https://img.shields.io/badge/postgres-%23007ACC.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TYPEORM](https://img.shields.io/badge/typeorm-6DA55F?style=for-the-badge&logo=typeorm&logoColor=purple%27%3E)
![Postman](https://img.shields.io/badge/postman-FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white)
![Docker](https://img.shields.io/badge/docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white)
![VS Code](https://img.shields.io/badge/vscode-007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Jest](https://img.shields.io/badge/jest-white.svg?style=for-the-badge&logo=jest&logoColor=critical)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-white?style=for-the-badge&logo=github&logoColor=black)
![Ubuntu](https://img.shields.io/badge/ubuntu-E95420.svg?style=for-the-badge&logo=ubuntu&logoColor=white)


### API por Will 
[<img src="https://avatars.githubusercontent.com/u/98753304?v=4" width=115><br><sub>Willhan Marques</sub>](https://github.com/willmarques09)
