import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}

  async create(createProfessorDto: CreateProfessorDto) {
    return await this.prisma.professor.create({ data: createProfessorDto });
  }

  async findAll() {
    return await this.prisma.professor.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.professor.findUnique({
      where: {
        id,
      },
      include: {
        cursos: true,
      },
    });
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return await this.prisma.professor.update({
      where: { id },
      data: updateProfessorDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.professor.delete({ where: { id } });
  }

  async joinTheCurso(professorId: number, cursoId: number) {
    return await this.prisma.professor.update({
      data: {
        cursos: {
          connect: { id: cursoId },
        },
      },
      where: {
        id: professorId,
      },
    });
  }

  async leavesTheCurso(professorId: number, cursoId: number) {
    return await this.prisma.professor.update({
      data: {
        cursos: {
          disconnect: { id: cursoId },
        },
      },
      where: {
        id: professorId,
      },
    });
  }
}
