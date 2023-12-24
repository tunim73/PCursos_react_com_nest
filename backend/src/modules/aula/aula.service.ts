import { Injectable } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AulaService {
  constructor(private prisma: PrismaService) {}

  async create({
    nome,
    tipoAulaId,
    cursoId,
    professorId
  }: CreateAulaDto) {
    return await this.prisma.aula.create({
      data: {
        cursoId,
        professorId,
        nome,
        tipoAulaId
      }
    });
  }

  findAll() {
    return this.prisma.aula.findMany();
  }

  findOne(id: number) {
    return this.prisma.aula.findUnique({ where: { id } });
  }

  async update(id: number, updateAulaDto: UpdateAulaDto) {
    return await this.prisma.aula.update({
      where: { id },
      data: updateAulaDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.aula.delete({ where: { id } });
  }
}
