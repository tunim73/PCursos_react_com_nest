import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStudentDto) {
    return await this.prisma.student.create({ data });
  }

  async findAll() {
    return await this.prisma.student.findMany({
      include: {
        lessons: {
          include: {
            lesson: {
              select: {
                name: true,
              },
            },
          },
        },
        courses: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.student.findUnique({
      where: {
        id,
      },
      include: {
        courses: true,
      },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.student.delete({ where: { id } });
  }

  async enrollCourse(studentId: number, courseId: number) {
    return await this.prisma.student.update({
      data: {
        courses: {
          connect: { id: courseId },
        },
      },
      where: {
        id: studentId,
      },
    });
  }

  async unenrollCourse(studentId: number, courseId: number) {
    return await this.prisma.student.update({
      data: {
        courses: {
          disconnect: { id: courseId },
        },
      },
      where: {
        id: studentId,
      },
    });
  }

  async watchedLesson(studentId: number, lessonId: number) {
    return await this.prisma.student.update({
      data: {
        lessons: {
          create: {
            lesson: {
              connect: {
                id: lessonId,
              },
            },
          },
        },
      },
      where: {
        id: studentId,
      },
    });
  }
}
