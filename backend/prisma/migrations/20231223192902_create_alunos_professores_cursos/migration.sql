-- CreateTable
CREATE TABLE "alunos" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professores" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlunoToCurso" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CursoToProfessor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professores_email_key" ON "professores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToCurso_AB_unique" ON "_AlunoToCurso"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToCurso_B_index" ON "_AlunoToCurso"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CursoToProfessor_AB_unique" ON "_CursoToProfessor"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoToProfessor_B_index" ON "_CursoToProfessor"("B");

-- AddForeignKey
ALTER TABLE "_AlunoToCurso" ADD CONSTRAINT "_AlunoToCurso_A_fkey" FOREIGN KEY ("A") REFERENCES "alunos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoToCurso" ADD CONSTRAINT "_AlunoToCurso_B_fkey" FOREIGN KEY ("B") REFERENCES "cursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToProfessor" ADD CONSTRAINT "_CursoToProfessor_A_fkey" FOREIGN KEY ("A") REFERENCES "cursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CursoToProfessor" ADD CONSTRAINT "_CursoToProfessor_B_fkey" FOREIGN KEY ("B") REFERENCES "professores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
