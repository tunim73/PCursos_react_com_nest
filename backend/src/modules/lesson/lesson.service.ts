import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create({
    name,
    lessonTypeId,
    courseId,
    teacherEmail,
    embed,
  }: CreateLessonDto) {
    const teacher = await this.prisma.teacher.findUnique({
      where: {
        email: teacherEmail,
      },
    });

    if (!teacher) throw new NotFoundException('user not found');

    return await this.prisma.lesson.create({
      data: {
        courseId,
        teacherId: teacher.id,
        name,
        lessonTypeId,
        embed,
      },
    });
  }

  findAll() {
    return this.prisma.lesson.findMany({
      include: { course: true, students: true },
    });
  }

  findOne(id: number) {
    return this.prisma.lesson.findUnique({ where: { id } });
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    return await this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.lesson.delete({ where: { id } });
  }
}
