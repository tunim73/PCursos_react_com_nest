import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await users();
  await courses();
  await lesson();
  await connectionsOfLesson();
}

async function connectionsOfLesson() {
  await prisma.lessonsStudents.createMany({
    data: [
      {
        lessonId: 1,
        studentId: 2,
      },
      {
        lessonId: 3,
        studentId: 2,
      },
      {
        lessonId: 4,
        studentId: 2,
      },
      {
        lessonId: 6,
        studentId: 2,
      },
      {
        lessonId: 9,
        studentId: 2,
      },
    ],
  });

  await prisma.lessonsStudents.createMany({
    data: [
      {
        lessonId: 2,
        studentId: 3,
      },
      {
        lessonId: 5,
        studentId: 3,
      },
      {
        lessonId: 6,
        studentId: 3,
      },
      {
        lessonId: 7,
        studentId: 3,
      },
      {
        lessonId: 9,
        studentId: 3,
      },
    ],
  });
}

async function lesson() {
  await prisma.lessonType.createMany({
    data: [
      {
        type: 'texto',
      },
      {
        type: 'vídeo',
      },
      {
        type: 'aúdio',
      },
    ],
  });

  await prisma.lesson.createMany({
    data: [
      {
        courseId: 1,
        lessonTypeId: 3,
        teacherId: 1,
        name: 'Aula 01 - Javinha',
      },
      {
        courseId: 1,
        lessonTypeId: 3,
        teacherId: 1,
        name: 'Aula 02 - Javinha',
      },
      {
        courseId: 1,
        lessonTypeId: 3,
        teacherId: 1,
        name: 'Aula 03 - Javinha',
      },
      {
        courseId: 2,
        lessonTypeId: 3,
        teacherId: 2,
        name: 'Aula 01 - Typescript',
      },
      {
        courseId: 2,
        lessonTypeId: 3,
        teacherId: 2,
        name: 'Aula 02 - Typescript',
      },
      {
        courseId: 3,
        lessonTypeId: 3,
        teacherId: 3,
        name: 'Aula 01 - Marketing Digital',
      },
      {
        courseId: 3,
        lessonTypeId: 3,
        teacherId: 3,
        name: 'Aula 02 - Marketing Digital',
      },
      {
        courseId: 4,
        lessonTypeId: 3,
        teacherId: 3,
        name: 'Aula 01 - Inglês',
      },
      {
        courseId: 4,
        lessonTypeId: 3,
        teacherId: 3,
        name: 'Aula 02 - Inglês',
      },
    ],
  });
}

async function users() {
  await prisma.student.createMany({
    data: [
      {
        email: 'admin@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'admin',
      },
      {
        email: 'naruto@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'naruto',
      },
      {
        email: 'sakura@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'sakura',
      },
      {
        email: 'sasuke@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'sasuke',
      },
    ],
  });

  await prisma.teacher.createMany({
    data: [
      {
        email: 'prof01@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'prof01',
      },
      {
        email: 'iruka@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'iruka',
      },
      {
        email: 'kakashi@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'kakashi',
      },
      {
        email: 'sarutobi@email.com',
        password:
          '$2b$10$kd/xTPosgN3QkpTxkxLgDe0AFX/m0/3uc4bIKlYqPdl8qiIFdVsm.',
        name: 'sarutobi',
      },
    ],
  });
}

async function courses() {
  await prisma.categoryCourse.createMany({
    data: [
      {
        category: 'Programação',
      },
      {
        category: 'Idiomas',
      },
      {
        category: 'Matemática',
      },
      {
        category: 'Gestão',
      },
      {
        category: 'Marketing',
      },
    ],
  });

  await prisma.course.create({
    data: {
      title: 'Java',
      description: 'qawdadawdadasfad',
      image: 'https://cursos.escolaporthal.com.br/metodo/imagemcursos/43.jpg',
      categories: {
        connect: {
          id: 1,
        },
      },
      students: {
        connect: [{ id: 2 }, { id: 3 }],
      },
      teachers: {
        connect: [{ id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.course.create({
    data: {
      title: 'Typescript',
      description: 'qawdadawdadasfad',
      image:
        'https://www.alura.com.br/assets/api/cursos/512/typescript-evoluindo-javascript.png',
      categories: {
        connect: {
          id: 1,
        },
      },
      students: {
        connect: [{ id: 4 }, { id: 3 }],
      },
      teachers: {
        connect: [{ id: 4 }, { id: 3 }],
      },
    },
  });

  await prisma.course.create({
    data: {
      title: 'Marketing digital',
      description: 'qawdadawdadasfad',
      image:
        'https://www.kryzalis.com.br/blog/wp-content/uploads/2023/06/Estrategias-de-marketing-digital.jpg',
      categories: {
        connect: {
          id: 5,
        },
      },
      students: {
        connect: [{ id: 2 }],
      },
      teachers: {
        connect: [{ id: 2 }],
      },
    },
  });

  await prisma.course.create({
    data: {
      title: 'Curso de Inglês',
      description: 'qawdadawdadasfad',
      image:
        'https://cenaic.com.br/intranet/empresa/cursos/quadros_cursos1_2.jpg',
      categories: {
        connect: {
          id: 2,
        },
      },

      students: {
        connect: [{ id: 2 }, { id: 3 }, { id: 4 }],
      },
      teachers: {
        connect: [{ id: 2 }, { id: 4 }],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
