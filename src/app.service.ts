import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Tarefa, Categoria } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createTarefa(descricao: string, categoriaId: number): Promise<Tarefa> {
    // Verifica se o categoriaId fornecido é válido
    const categoriaExists = await this.prisma.categoria.findUnique({
      where: { id: categoriaId },
    });
    if (!categoriaExists) {
      throw new NotFoundException('Categoria não encontrada');
    }

    // Cria a tarefa com o categoriaId fornecido
    return this.prisma.tarefa.create({
      data: {
        descricao,
        foiFeita: false,
        categoriaId,
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

  async getTarefasCompletas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany({ where: { foiFeita: true } });
  }
  
  async getTarefasAtivas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany({ where: { foiFeita: false } });
  }

  async updateTarefa(id: number, data: { descricao?: string, foiFeita?: boolean, categoriaId?: number }): Promise<Tarefa> {
    // Verifica se o categoriaId fornecido é válido
    if (data.categoriaId) {
      const categoriaExists = await this.prisma.categoria.findUnique({
        where: { id: data.categoriaId },
      });
      if (!categoriaExists) {
        throw new NotFoundException('Categoria não encontrada');
      }
    }

    // Atualiza a tarefa com os dados fornecidos
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


  async deleteTarefasCompletas(): Promise<Tarefa[]> {
    const tarefasCompletas = await this.prisma.tarefa.findMany({
      where: { foiFeita: true },
    });
  
    const tarefasDeletadas = await Promise.all(
      tarefasCompletas.map(async (tarefa) => {
        return this.prisma.tarefa.delete({
          where: { id: tarefa.id },
        });
      }),
    );
  
    return tarefasDeletadas;
  }

  async createCategoria(nome: string): Promise<Categoria> {
    return this.prisma.categoria.create({
      data: {
        nome,
      },
    });
  }

  async getCategorias(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany();
  }

  async getCategoriaById(id: number): Promise<Categoria> {
    return this.prisma.categoria.findUnique({
      where: { id },
      include: {
        tarefas: true,
      },
    });
  }

  async getTarefasPorCategoria(categoriaId: number): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany({
        where: { categoriaId },
    });
  }

  async updateCategoria(id: number, nome: string): Promise<Categoria> {
    return this.prisma.categoria.update({
      where: { id },
      data: { nome },
    });
  }

  async deleteCategoria(id: number): Promise<Categoria> {
    return this.prisma.categoria.delete({
      where: { id },
    });
  }
}
