import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(
    { title, description, categories, image }: CreateCourseDto,
    teacherId: number,
  ) {
    const arrayCategoria = categories.toLowerCase().split(',');

    const connectOrCreateCategorias = arrayCategoria.map((category) => {
      return {
        where: {
          category: category.trim(),
        },
        create: {
          category: category.trim(),
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
          image,
          teachers: {
            connect: {
              id: teacherId,
            },
          },
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
    const courses = await this.prisma.course.findUnique({
      where: { id },
      include: {
        categories: {
          orderBy: {
            category: 'asc',
          },
        },
        lessons: {
          orderBy: {
            name: 'asc',
          },
          include: {
            lessonType: true,
          },
        },
      },
    });

    return { courses };
  }

  async getCourseAndCompletedlesson(courseId: number, studentId: number) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
      include: {
        categories: {
          orderBy: {
            category: 'asc',
          },
        },
        lessons: {
          orderBy: {
            name: 'asc',
          },
          include: {
            lessonType: true,
          },
        },
        teachers: {
          orderBy: {
            name: 'asc',
          },
        },
      },
    });

    const courseAndLessonsCompleted = await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        lessons: {
          where: {
            students: {
              every: {
                studentId,
              },
            },
          },
          select: {
            id: true,
          },
        },
      },
    });

    const watchedLessons = courseAndLessonsCompleted.lessons;

    const allLessonsOfCourse = course.lessons;

    const allLessonsMarkedAsWatched = allLessonsOfCourse.map((lesson) => {
      const checkLesson = watchedLessons.some((e) => e.id === lesson.id);
      return { ...lesson, watched: checkLesson };
    });

    course.lessons = allLessonsMarkedAsWatched;

    return course;
  }

  async update(
    id: number,
    { title, description, categories, image }: UpdateCourseDto,
  ) {
    await this.prisma.course.update({
      where: {
        id,
      },
      data: {
        categories: {
          set: [],
        },
      },
    });

    const arrayCategoria = categories.toLowerCase().split(',');
    const connectOrCreateCategorias = arrayCategoria.map((category) => {
      return {
        where: {
          category: category.trim(),
        },
        create: {
          category: category.trim(),
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

  async getCourseForTeacher(courseId: number) {
    return await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        categories: {
          orderBy: {
            category: 'asc',
          },
        },
        lessons: {
          orderBy: {
            name: 'asc',
          },
          include: {
            teacher: true,
            lessonType: true,
          },
        },
        teachers: {
          orderBy: {
            name: 'asc',
          },
        },
      },
    });
  }

  async addTeacherInCourse(courseId: number, teacherEmail: string) {
    const teacher = await this.prisma.teacher.findUnique({
      where: {
        email: teacherEmail,
      },
    });

    if (!teacher) throw new NotFoundException('user not found');

    return await this.prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        teachers: {
          connect: {
            id: teacher.id,
          },
        },
      },
    });
  }

  async removeTeacherInCourse(courseId: number, teacherId: number) {
    return await this.prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        teachers: {
          disconnect: {
            id: teacherId,
          },
        },
      },
    });
  }

  enrollCourse(courseId: number, studentId: number) {
    return this.prisma.course.update({
      data: {
        students: {
          connect: {
            id: studentId,
          },
        },
      },
      where: {
        id: courseId,
      },
    });
  }

  async unenrollCourse(courseId: number, studentId: number) {
    return await this.prisma.$transaction([
      this.prisma.lessonsStudents.deleteMany({
        where: {
          studentId,
          AND: {
            lesson: {
              courseId,
            },
          },
        },
      }),
      this.prisma.student.update({
        data: {
          courses: {
            disconnect: { id: courseId },
          },
        },
        where: {
          id: studentId,
        },
      }),
    ]);
  }
}
