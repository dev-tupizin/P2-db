-- CreateTable
CREATE TABLE "jogos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "jogo" TEXT NOT NULL,
    "raridade" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "dataLancamento" DOUBLE PRECISION NOT NULL,
    "popularidade" TEXT NOT NULL,
    "disponivel" TEXT NOT NULL,

    CONSTRAINT "jogos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jogos_nome_key" ON "jogos"("nome");
