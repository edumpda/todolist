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

#### Criar Tarefa

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
  Status: 201 Created
  {
  "id": "number",
  "descricao": "string",
  "foiFeita": "boolean",
  "categoriaId": "number"
  }
  ```

#### Tarefas Completas

- **URL**: `/tarefa/completas`
- **Method**: `GET`
- **Description**: Obtém todas as tarefas que foram completadas.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Tarefas Ativas

- **URL**: `/tarefa/ativas`
- **Method**: `GET`
- **Description**: Obtém todas as tarefas que estão ativas.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Obter Tarefas

- **URL**: `/tarefa`
- **Method**: `GET`
- **Description**: Obtém todas as tarefas.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Tarefas Por ID

- **URL**: `/tarefa/:id`
- **URL Params**: `id (ID da tarefa)`
- **Method**: `GET`
- **Description**: Obtém uma tarefa pelo ID fornecido.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Atualizar Tarefa

- **URL**: `/tarefa:id`
- **URL Params**: `id (ID da tarefa)`
- **Method**: `PATCH`
- **Description**: Atualiza uma tarefa.
- **Request Body**:
  ```json
  {
    "descricao": "string",
    "foiFeita": "boolean",
    "categoriaId": "number"
  }
  ```
- **Response**:
  ```json
  Status: 200 OK
  {
  "id": "number",
  "descricao": "string",
  "foiFeita": "boolean",
  "categoriaId": "number"
  }
  ```

#### Deletar Todas as Tarefas

- **URL**: `/tarefa/completas`
- **Method**: `DELETE`
- **Description**: Deleta todas as tarefas completas.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Deletar Tarefas Por ID

- **URL**: `/tarefa/:id`
- **URL Params**: `id (ID da tarefa)`
- **Method**: `DELETE`
- **Description**: Deleta uma tarefa pelo ID fornecido.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Criar Categoria

- **URL**: `/categoria`
- **Method**: `POST`
- **Description**: Cria uma nova categoria.
- **Request Body**:
  ```json
  {
    "nome": "string"
  }
  ```
- **Response**:
  ```json
  Status: 201 Created
  {
  "id": "number",
  "nome": "string"
  }
  ```

#### Obter Categoria

- **URL**: `/categoria`
- **Method**: `GET`
- **Description**: Obtém todas as categorias.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "nome": "string"
    }
  ]
  ```

#### Categorias Por ID

- **URL**: `/categoria/:id`
- **URL Params**: `id (ID da Categoria)`
- **Method**: `GET`
- **Description**: Obtém uma categoria pelo ID fornecido.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  {
    "id": "number",
    "nome": "string",
    "tarefas": [
      {
        "id": "number",
        "descricao": "string",
        "foiFeita": "boolean",
        "categoriaId": "number"
      }
    ]
  }
  ```

#### Obter Tarefas Por Categoria

- **URL**: `/tarefa/categoria/:categoriaId`
- **URL Params**: `CategoriaId (ID da categoria em tarefa)`
- **Method**: `GET`
- **Description**: Obtém todas as tarefas pelo Categoria ID fornecido.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "descricao": "string",
      "foiFeita": "boolean",
      "categoriaId": "number"
    }
  ]
  ```

#### Atualizar Categoria

- **URL**: `/categoria:id`
- **URL Params**: `id (ID da categoria)`
- **Method**: `PATCH`
- **Description**: Atualiza uma categoria.
- **Request Body**:
  ```json
  {
    "nome": "string"
  }
  ```
- **Response**:
  ```json
  Status: 200 OK
  {
  "id": "number",
  "nome": "string"
  }
  ```

#### Deletar Categorias Por ID

- **URL**: `/categoria/:id`
- **URL Params**: `id (ID da categoria)`
- **Method**: `DELETE`
- **Description**: Deleta uma categoria pelo ID fornecido.
- **Response**:
  ```json
  Status: 200 OK
  ```
- **Body**:
  ```json
  [
    {
      "id": "number",
      "nome": "string"
    }
  ]
  ```