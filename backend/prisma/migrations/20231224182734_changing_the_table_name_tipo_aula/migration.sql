/*
  Warnings:

  - You are about to drop the `TipoAula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "aulas" DROP CONSTRAINT "aulas_tipoAulaId_fkey";

-- DropTable
DROP TABLE "TipoAula";

-- CreateTable
CREATE TABLE "tipo_aula" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_aula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_tipoAulaId_fkey" FOREIGN KEY ("tipoAulaId") REFERENCES "tipo_aula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
