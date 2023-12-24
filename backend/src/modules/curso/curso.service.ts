import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}

  async create({ titulo, descricao, categorias }: CreateCursoDto) {
    const arrayCategoria = categorias.toLowerCase().split(',');

    const connectOrCreateCategorias = arrayCategoria.map((categoria) => {
      return {
        where: {
          categoria,
        },
        create: {
          categoria,
        },
      };
    });

    try {
      const newCurso = await this.prisma.curso.create({
        data: {
          titulo,
          descricao,
          categorias: {
            connectOrCreate: connectOrCreateCategorias,
          },
        },
      });

      return newCurso;
    } catch (erro) {
      return erro;
    }
  }

  async findAll() {
    return await this.prisma.curso.findMany({include:{aulas:true}});
  }

  async findOne(id: number) {
    return await this.prisma.curso.findUnique({
      where: { id },
    });
  }

  async update(id: number, { titulo, descricao, categorias }: UpdateCursoDto) {
    const arrayCategoria = categorias.toLowerCase().split(',');

    const connectOrCreateCategorias = arrayCategoria.map((categoria) => {
      return {
        where: {
          categoria,
        },
        create: {
          categoria,
        },
      };
    });

    return await this.prisma.curso.update({
      where: {
        id,
      },
      data: {
        titulo,
        descricao,
        categorias: {
          connectOrCreate: connectOrCreateCategorias,
        },
      },
    });
  }

  async remove(id: number) {

    return this.prisma.$transaction(async (prisma) => {
      
      await prisma.aula.deleteMany({
        where:{cursoId:id}
      })
  
      return await prisma.curso.delete({
        where: {
          id,
        },
      });
    })
  }
}
