import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Tarefa } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createTarefa(tag: string, descricao: string,): Promise<Tarefa> {
    return this.prisma.tarefa.create({
      data: {
        tag,
        descricao,
        foiFeita: false,
      },
    });
  }

  async getTarefas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany();
  }

  async getTarefaById(id: number): Promise<Tarefa> {
    return this.prisma.tarefa.findUnique({
      where: { id },
    });
  }

  async updateTarefa(id: number, data: { tag?: string, descricao?: string, foiFeita?: boolean }): Promise<Tarefa> {
    return this.prisma.tarefa.update({
      where: { id },
      data,
    });
  }

  async deleteTarefa(id: number): Promise<Tarefa> {
    return this.prisma.tarefa.delete({
      where: { id },
    });
  }
}

/* @Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
} */
