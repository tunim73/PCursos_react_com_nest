import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create({ title, description, categories, image }: CreateCourseDto) {
    const arrayCategoria = categories.toLowerCase().split(',');

    const connectOrCreateCategorias = arrayCategoria.map((category) => {
      return {
        where: {
          category,
        },
        create: {
          category,
        },
      };
    });

    try {
      const newCourse = await this.prisma.course.create({
        data: {
          title,
          description,
          categories: {
            connectOrCreate: connectOrCreateCategorias,
          },
          image
        },
      });

      return newCourse;
    } catch (erro) {
      return erro;
    }
  }

  async findAll() {
    return await this.prisma.course.findMany({ include: { lessons: true } });
  }

  async findOne(id: number) {
    return await this.prisma.course.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    { title, description, categories }: UpdateCourseDto,
  ) {
    const arrayCategoria = categories.toLowerCase().split(',');

    const connectOrCreateCategorias = arrayCategoria.map((category) => {
      return {
        where: {
          category,
        },
        create: {
          category,
        },
      };
    });

    return await this.prisma.course.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        categories: {
          connectOrCreate: connectOrCreateCategorias,
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.lesson.deleteMany({
        where: { courseId: id },
      });

      return await prisma.course.delete({
        where: {
          id,
        },
      });
    });
  }
}
