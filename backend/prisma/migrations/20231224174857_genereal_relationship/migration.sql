/*
  Warnings:

  - Added the required column `cursoId` to the `aulas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorId` to the `aulas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "aulas" ADD COLUMN     "cursoId" INTEGER NOT NULL,
ADD COLUMN     "professorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "aulasOfAlunos" (
    "aulaId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,

    CONSTRAINT "aulasOfAlunos_pkey" PRIMARY KEY ("aulaId","alunoId")
);

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulasOfAlunos" ADD CONSTRAINT "aulasOfAlunos_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulasOfAlunos" ADD CONSTRAINT "aulasOfAlunos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
