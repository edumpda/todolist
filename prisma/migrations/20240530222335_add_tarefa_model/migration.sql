-- CreateTable
CREATE TABLE "Tarefa" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "foiFeita" BOOLEAN NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("id")
);
