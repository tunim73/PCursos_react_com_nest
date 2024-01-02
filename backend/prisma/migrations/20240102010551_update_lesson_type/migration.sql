/*
  Warnings:

  - You are about to drop the column `tipo` on the `LessonType` table. All the data in the column will be lost.
  - Added the required column `type` to the `LessonType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LessonType" DROP COLUMN "tipo",
ADD COLUMN     "type" TEXT NOT NULL;
