import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  // POST /tarefa
  it('should create a new task', async () => {
    const requestBody = {
      descricao: 'Nova Tarefa',
      categoriaId: 1,
    };
  
    const response = await request(app.getHttpServer())
      .post('/tarefa')
      .send(requestBody)
      .expect(201);
  
    expect(response.body).toHaveProperty('id');
    expect(response.body.descricao).toBe(requestBody.descricao);
    expect(response.body.categoriaId).toBe(requestBody.categoriaId);
  });

  // GET /tarefa/completas
  it('should get all completed tasks', async () => {
    const response = await request(app.getHttpServer())
      .get('/tarefa/completas')
      .expect(200);
  
    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach(tarefa => {
      expect(tarefa.foiFeita).toBe(true);
    });
  });

  // GET /tarefa/ativas
  it('should get all active tarefas', async () => {
    const response = await request(app.getHttpServer())
      .get('/tarefa/ativas')
      .expect(200);
  
    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach(tarefa => {
      expect(tarefa.foiFeita).toBe(false);
    });
  });

  // GET /tarefa
  it('should get all tasks', async () => {
    const response = await request(app.getHttpServer())
      .get('/tarefa')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  // GET /tarefa/:id
  it('should get tasks by id', async () => {
    const id = 4;

    const response = await request(app.getHttpServer())
      .get(`/tarefa/${id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', id);
  });

  // PATCH /tarefa/:id
  it('should update tasks by id', async () => {
    const id = 9;
    const requestBody = {
      descricao: 'Tarefa atualizada',
      foiFeita: true,
    };

    const response = await request(app.getHttpServer())
      .patch(`/tarefa/${id}`)
      .send(requestBody)
      .expect(200);

    expect(response.body).toHaveProperty('descricao', requestBody.descricao);
  });

  // DELETE /tarefa/completas
  it('should delete all completed tasks', async () => {
    const response = await request(app.getHttpServer())
      .delete('/tarefa/completas')
      .expect(200);
  
    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach(tarefa => {
      expect(tarefa.foiFeita).toBe(true);
    });
  
    const checkResponse = await request(app.getHttpServer())
      .get('/tarefa/completas')
      .expect(200);
  
    expect(checkResponse.body).toBeInstanceOf(Array);
    expect(checkResponse.body.length).toBe(0);
  })

  // DELETE /tarefa/:id
  it('should delete tasks by id', async () => {
    const id = 10;

    const response = await request(app.getHttpServer())
      .delete(`/tarefa/${id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', id);
  });

  // POST /categoria
  it('should create a new tag', async () => {
    const requestBody = {
      nome: 'Nova Categoria',
    };

    const response = await request(app.getHttpServer())
      .post('/categoria')
      .send(requestBody)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe(requestBody.nome);
  });

  // GET /categoria
  it('should get all tags', async () => {
    const response = await request(app.getHttpServer())
      .get('/categoria')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  // GET /categoria/:id
  it('should get tag by id', async () => {
    const id = 1;

    const response = await request(app.getHttpServer())
      .get(`/categoria/${id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', id);
  });

  // GET /tarefa/categoria/:categoriaId
  it('should get all tasks by categoriaId', async () => {
    const categoriaId = 1;

    const response = await request(app.getHttpServer())
      .get(`/tarefa/categoria/${categoriaId}`)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach(tarefa => {
      expect(tarefa.categoriaId).toBe(categoriaId);
    });
  });

  // PATCH /categoria/:id
  it('should update tag by id', async () => {
    const id = 4;
    const requestBody = {
      nome: 'Categoria atualizada',
    };

    const response = await request(app.getHttpServer())
      .patch(`/categoria/${id}`)
      .send(requestBody)
      .expect(200);

    expect(response.body).toHaveProperty('nome', requestBody.nome);
  });

  // DELETE /categoria/:id
  it('should delete tag by id', async () => {
    const id = 4;

    const response = await request(app.getHttpServer())
      .delete(`/categoria/${id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', id);
  });
});