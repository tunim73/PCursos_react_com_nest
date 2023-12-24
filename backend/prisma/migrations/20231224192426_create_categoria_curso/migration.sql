-- CreateTable
CREATE TABLE "categoria_cursos" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "categoria_cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Categoria_cursoToCurso" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Categoria_cursoToCurso_AB_unique" ON "_Categoria_cursoToCurso"("A", "B");

-- CreateIndex
CREATE INDEX "_Categoria_cursoToCurso_B_index" ON "_Categoria_cursoToCurso"("B");

-- AddForeignKey
ALTER TABLE "_Categoria_cursoToCurso" ADD CONSTRAINT "_Categoria_cursoToCurso_A_fkey" FOREIGN KEY ("A") REFERENCES "categoria_cursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Categoria_cursoToCurso" ADD CONSTRAINT "_Categoria_cursoToCurso_B_fkey" FOREIGN KEY ("B") REFERENCES "cursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
