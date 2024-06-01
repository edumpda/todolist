/*
  Warnings:

  - You are about to drop the column `tag` on the `Tarefa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tarefa" DROP COLUMN "tag",
ADD COLUMN     "categoriaId" INTEGER,
ALTER COLUMN "foiFeita" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tarefa" ADD CONSTRAINT "Tarefa_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
