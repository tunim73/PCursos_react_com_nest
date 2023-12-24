-- CreateTable
CREATE TABLE "aulas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoAulaId" INTEGER NOT NULL,

    CONSTRAINT "aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoAula" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "TipoAula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_tipoAulaId_fkey" FOREIGN KEY ("tipoAulaId") REFERENCES "TipoAula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
