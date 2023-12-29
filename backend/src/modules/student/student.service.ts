import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../../prisma.service';
import { Hash } from 'src/util/hash/hash';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create({ email, password, name }: CreateStudentDto) {
    const user = await this.findEmail(email);

    if (user) throw new NotFoundException('aluno já cadastrado');

    const hash = await Hash.apply(password);

    return await this.prisma.student.create({
      data: {
        email,
        name,
        password: hash,
      },
    });
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

  async findEmail(email: string) {
    return await this.prisma.student.findUnique({
      where: {
        email,
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