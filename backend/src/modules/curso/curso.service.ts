import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CursoService {

  constructor(
    private  prisma:PrismaService) {
  }

  async create(createCursoDto: CreateCursoDto) {

    return await this.prisma.curso.create({ data: createCursoDto });
  }

  async findAll() {
    return await this.prisma.curso.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.curso.findUnique({
      where:{id}
    })
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    return await this.prisma.curso.update({
      where: {
        id
      },
      data:updateCursoDto
    })
  }

  async remove(id: number) {
    return await this.prisma.curso.delete({
      where: {
        id
      }
    })
  }
}
