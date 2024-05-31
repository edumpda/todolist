import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { TarefasBody } from './dtos/create-tasks-body';
import { Tarefa } from '@prisma/client';

@Controller('tarefa')
export class AppController {
  constructor(private readonly tarefaService: AppService) {}

  @Post()
  async createTarefa(
    @Body('tag') tag: string,
    @Body('descricao') descricao: string,
  ): Promise<Tarefa> {
    return this.tarefaService.createTarefa(tag, descricao);
  }

  @Get()
  async getTarefas(): Promise<Tarefa[]> {
    return this.tarefaService.getTarefas();
  }

  @Get(':id')
  async getTarefaById(@Param('id', ParseIntPipe) id: number): Promise<Tarefa> {
    return this.tarefaService.getTarefaById(id);
  }

  @Patch(':id')
  async updateTarefa(
    @Param('id', ParseIntPipe) id: number,
    @Body('tag') tag?: string,
    @Body('descricao') descricao?: string,
    @Body('foiFeita') foiFeita?: boolean,
  ): Promise<Tarefa> {
    return this.tarefaService.updateTarefa(id, { tag, descricao, foiFeita });
  }

  @Delete(':id')
  async deleteTarefa(@Param('id', ParseIntPipe) id: number): Promise<Tarefa> {
    return this.tarefaService.deleteTarefa(id);
  }
}
/* @Controller()
export class AppController {
  constructor(private prisma: PrismaService,
  ) {}

  @Get()
  async getHello(@Body() body: TarefasBody) {
    const { tag, descricao } = body;

    const tarefa = await this.prisma.tarefa.create({
      data: {
        tag,
        descricao,
        foiFeita: false
      },
    });
    
    return {
      tarefa,
    }
  };
} */
