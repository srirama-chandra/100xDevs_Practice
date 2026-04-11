-- CreateTable
CREATE TABLE "Calculator" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "sum" INTEGER NOT NULL,

    CONSTRAINT "Calculator_pkey" PRIMARY KEY ("id")
);
