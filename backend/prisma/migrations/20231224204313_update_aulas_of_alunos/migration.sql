-- DropForeignKey
ALTER TABLE "aulasOfAlunos" DROP CONSTRAINT "aulasOfAlunos_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "aulasOfAlunos" DROP CONSTRAINT "aulasOfAlunos_aulaId_fkey";

-- AddForeignKey
ALTER TABLE "aulasOfAlunos" ADD CONSTRAINT "aulasOfAlunos_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulasOfAlunos" ADD CONSTRAINT "aulasOfAlunos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
