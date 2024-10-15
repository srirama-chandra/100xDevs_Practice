-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" INTEGER NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
