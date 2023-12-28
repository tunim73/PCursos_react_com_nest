import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return await this.prisma.teacher.create({ data: createTeacherDto });
  }

  async findAll() {
    return await this.prisma.teacher.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.teacher.findUnique({
      where: {
        id,
      },
      include: {
        courses: true,
      },
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return await this.prisma.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.teacher.delete({ where: { id } });
  }

  async joinTheCourse(teacherId: number, courseId: number) {
    return await this.prisma.teacher.update({
      data: {
        courses: {
          connect: { id: courseId },
        },
      },
      where: {
        id: teacherId,
      },
    });
  }

  async leavesTheCourse(teacherId: number, courseId: number) {
    return await this.prisma.teacher.update({
      data: {
        courses: {
          disconnect: { id: courseId },
        },
      },
      where: {
        id: teacherId,
      },
    });
  }
}
