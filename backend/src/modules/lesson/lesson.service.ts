import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create({ name, lessonTypeId, courseId, teacherId }: CreateLessonDto) {
    return await this.prisma.lesson.create({
      data: {
        courseId,
        teacherId,
        name,
        lessonTypeId,
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
