/*
  Warnings:

  - Added the required column `senha` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alunos" ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "professores" ADD COLUMN     "senha" TEXT NOT NULL;
