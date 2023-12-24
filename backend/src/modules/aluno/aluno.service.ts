import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AlunoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAlunoDto) {
    return await this.prisma.aluno.create({ data });
  }

  async findAll() { 
    return await this.prisma.aluno.findMany({
      include: {
        aulas: { 
          include: {
            aula: {
              select: {
                nome:true
              }
            }
          }
        },
        cursos: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.aluno.findUnique({
      where: {
        id,
      },
      include: {
        cursos: true,
      },
    });
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.prisma.aluno.update({
      where: { id },
      data: updateAlunoDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.aluno.delete({ where: { id } });
  }

  async enrollCurso(alunoId: number, cursoId: number) {
    return await this.prisma.aluno.update({
      data: {
        cursos: {
          connect: { id: cursoId },
        },
      },
      where: {
        id: alunoId,
      },
    });
  }

  async unenrollCurso(alunoId: number, cursoId: number) {
    return await this.prisma.aluno.update({
      data: {
        cursos: {
          disconnect: { id: cursoId },
        },
      },
      where: {
        id: alunoId,
      },
    });
  }

  async watchedAula(alunoId: number, aulaId: number) {
    return await this.prisma.aluno.update({
      data: {
        aulas: {
          create: {
            aula: {
              connect: {
                id: aulaId,
              },
            },
          },
        },
      },
      where: {
        id: alunoId,
      },
    });
  }
}
