/*
  Warnings:

  - A unique constraint covering the columns `[categoria]` on the table `categoria_cursos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categoria_cursos_categoria_key" ON "categoria_cursos"("categoria");
