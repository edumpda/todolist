import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { TarefasBody } from './dtos/create-tasks-body';
import { Tarefa, Categoria } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('tarefa')
  async createTarefa(@Body() tarefasBody: TarefasBody): Promise<Tarefa> {
    const {descricao, categoriaId } = tarefasBody;
    return this.appService.createTarefa(descricao, categoriaId);
  }

  @Get('tarefa')
  async getTarefas(): Promise<Tarefa[]> {
    return this.appService.getTarefas();
  }

  @Get('tarefa/:id')
  async getTarefaById(@Param('id', ParseIntPipe) id: number): Promise<Tarefa> {
    return this.appService.getTarefaById(id);
  }

  @Patch('tarefa/:id')
  async updateTarefa(
    @Param('id', ParseIntPipe) id: number,
    @Body('descricao') descricao?: string,
    @Body('foiFeita') foiFeita?: boolean,
    @Body('categoriaId') categoriaId?: number,
  ): Promise<Tarefa> {
    return this.appService.updateTarefa(id, { descricao, foiFeita, categoriaId });
  }

  @Delete('tarefa/:id')
  async deleteTarefa(@Param('id', ParseIntPipe) id: number): Promise<Tarefa> {
    return this.appService.deleteTarefa(id);
  }

  @Post('categoria')
  async createCategoria(@Body('nome') nome: string): Promise<Categoria> {
    return this.appService.createCategoria(nome);
  }

  @Get('categoria')
  async getCategorias(): Promise<Categoria[]> {
    return this.appService.getCategorias();
  }

  @Get('categoria/:id')
  async getCategoriaById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.appService.getCategoriaById(id);
  }

  @Patch('categoria/:id')
  async updateCategoria(
    @Param('id', ParseIntPipe) id: number,
    @Body('nome') nome: string,
  ): Promise<Categoria> {
    return this.appService.updateCategoria(id, nome);
  }

  @Delete('categoria/:id')
  async deleteCategoria(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.appService.deleteCategoria(id);
  }
}
