/*
  Warnings:

  - You are about to drop the column `tipo` on the `categoria_cursos` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `categoria_cursos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categoria_cursos" DROP COLUMN "tipo",
ADD COLUMN     "categoria" TEXT NOT NULL;
