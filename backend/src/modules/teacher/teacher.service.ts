import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma.service';
import { Hash } from 'src/util/hash/hash';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async create({ email, password, name }: CreateTeacherDto) {
    const user = await this.findEmail(email);

    if (user) throw new NotFoundException('professor já cadastrado');

    const hash = await Hash.apply(password);

    return await this.prisma.teacher.create({
      data: {
        email,
        name,
        password: hash,
      },
    });
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

  async findEmail(email: string) {
    return await this.prisma.teacher.findUnique({
      where: {
        email,
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

  async getTeacherCourses(id: number) {
    return await this.prisma.teacher.findUnique({
      where: {
        id,
      },
      include: {
        courses: {
          include: {
            categories: {
              orderBy: {
                category: 'asc',
              },
              select: {
                category: true,
              },
            },
          },
          orderBy: {
            title: 'asc',
          },
        },
      },
    });
  }
}
