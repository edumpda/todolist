## Instalação

```bash
$ npm install
```

## Executando aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test
```

### Documentação de uso: Rotas, requisições e expectativas

#### Create Tarefa

- **URL**: `/tarefa`
- **Method**: `POST`
- **Description**: Cria uma nova tarefa.
- **Request Body**:
  ```json
  {
    "descricao": "string",
    "categoriaId": "number"
  }
  ```
- **Response**:
  ```json
  "Status: 201 Created"
  {
  "id": "number",
  "descricao": "string",
  "foiFeita": "boolean",
  "categoriaId": "number"
  }
  ```

#### Tarefas Completas